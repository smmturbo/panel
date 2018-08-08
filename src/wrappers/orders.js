import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { LoadingMessage, EmptyList  } from '../components/interface'
import { OrderList } from '../components/orders'

class OrdersWrapper extends React.Component {

  render()  {
    const { orders, requesting } = this.props

    if( !isLoaded(orders) || requesting ) {
      return <LoadingMessage />
    }

    if(isEmpty(orders) ) {
      return <EmptyList message="Nenhum pedido com esses parâmetros" />
    }

    return <OrderList orders={orders} />
  }
}

function mapStateToProps({ firebase: { data } }) {
  return { orders: data.orders }
}

function firebaseData(props, store) {
  return [{ path: `/userOrders/${store.getState().firebase.auth.uid}`, storeAs: 'orders', queryParams: ['orderByChild=type', 'equalTo=order'] }]
}

OrdersWrapper = firebaseConnect(firebaseData)(OrdersWrapper)
OrdersWrapper = connect(mapStateToProps)(OrdersWrapper)

export { OrdersWrapper }
