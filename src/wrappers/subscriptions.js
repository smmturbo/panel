import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { PageHeader, LoadingMessage, EmptyList  } from '../components/interface'
import { SubscriptionList } from '../components/subscriptions'

class SubscriptionsWrapper extends React.Component {

  render()  {
    const { subscriptions, requesting } = this.props

    if( !isLoaded(subscriptions) || requesting ) {
      return <LoadingMessage />
    }

    if(isEmpty(subscriptions) ) {
      return <EmptyList message="Nenhum pedido com esses parâmetros" />
    }

    return <SubscriptionList subscriptions={subscriptions} />
  }
}

function mapStateToProps({ firebase: { data } }) {
  return { subscriptions: data.subscriptions }
}

function firebaseData(props, store) {
  return [{ path: `/userSubscriptions/${store.getState().firebase.auth.uid}`, storeAs: 'subscriptions' }]
}

SubscriptionsWrapper = firebaseConnect(firebaseData)(SubscriptionsWrapper)
SubscriptionsWrapper = connect(mapStateToProps)(SubscriptionsWrapper)

export { SubscriptionsWrapper }
