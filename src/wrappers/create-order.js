import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import _ from 'lodash'
import axios from 'axios'

import { notifySuccess, notifyError } from '../actions'
import { CreateOrder } from '../components/create-order'
import { LoadingMessage } from '../components/interface'

import { PLACE_ORDER_URL } from '../utils/constants'

import Validators from '../helpers/validators'

class CreateOrderWrapper extends React.Component {

  state = { processing: false }

  render = () => {

    const { products, categories } = this.props

    if(!isLoaded(products) || !isLoaded(categories))  {
      return <LoadingMessage />
    }

    return (<CreateOrder
              handleAction={this._placeOrder}
              products={_.orderBy(this.props.products, ['label'], ['asc'])}
              categories={this.props.categories}
              processing={this.state.processing}
           />)
  }

  _placeOrder = async (order) => {

    const { auth } = this.props

    // FUTURE: Place an HTTP call to send order. This will make sure the user has enough balance
    order.user = auth.uid

    // Change Loading status
    this.setState({ processing: true })

    // Will place remote order
    const response = await axios.post(PLACE_ORDER_URL, order).catch(({response: { data }}) => this.props.notifyError(data.error) )

    if(response.data && !response.data.error) {
      this.props.notifySuccess(response.data.message)
    }

    this.setState({processing: false})

    return
  }
}

const mapStateToProps = ({ firebase: { data, auth } }) =>  {
  return { balance: data.balance, auth, products: data.products, categories: data.categories }
}

const firebaseData = (props, store) =>  {

  const uid = store.getState().firebase.auth.uid

  return [
    { path: `/userData/${uid}/balance`, storeAs: 'balance' },
    '/products', '/categories'
  ]
}

CreateOrderWrapper = firebaseConnect(firebaseData)(CreateOrderWrapper)
CreateOrderWrapper = connect(mapStateToProps, { notifySuccess, notifyError } )(CreateOrderWrapper)

export { CreateOrderWrapper }
