import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import _ from 'lodash'
import axios from 'axios'

import { notifySuccess, notifyError } from '../actions'
import { CreateOrder } from '../components/create-order'
import { LoadingMessage } from '../components/interface'
import productsSelector from '../selectors/products'

import { URL_PLACE_ORDER } from '../data/constants'

class CreateOrderWrapper extends React.Component {

  state = { processing: false }

  render = () => {

    const { products, categories, customPrices } = this.props

    if(!isLoaded(products) || !isLoaded(categories) || !isLoaded(customPrices) )  {
      return <LoadingMessage />
    }

    return (<CreateOrder
              handleAction={this._placeOrder}
              products={_.orderBy(this.props.products, ['label'], ['asc'])}
              categories={this.props.categories}
              processing={this.state.processing}
              customPrices={customPrices}
           />)
  }

  _placeOrder = async (order) => {

    const { auth } = this.props

    // FUTURE: Place an HTTP call to send order. This will make sure the user has enough balance
    order.user = auth.uid

    // Change Loading status
    this.setState({ processing: true })

    // Will place remote order
    const response = await axios.post(URL_PLACE_ORDER, order).catch(({response: { data }}) => this.props.notifyError('Por favor insira créditos.', 'Saldo insuficiente') )

    if(response.data && !response.data.error) {
      this.props.notifySuccess(response.data.message)
    }

    this.setState({processing: false})

    return
  }
}

const mapStateToProps = (state, props) =>  {
  const { firebase: { data, auth } } = state
  return { auth, products: productsSelector(state, props), categories: data.categories, customPrices: data.customPrices }
}

const firebaseData = (props, store) =>  {

  const uid = store.getState().firebase.auth.uid

  return [
    { path: `/customPrices/${uid}`, storeAs: 'customPrices' },
    '/products', '/categories'
  ]
}

CreateOrderWrapper = firebaseConnect(firebaseData)(CreateOrderWrapper)
CreateOrderWrapper = connect(mapStateToProps, { notifySuccess, notifyError } )(CreateOrderWrapper)

export { CreateOrderWrapper }
