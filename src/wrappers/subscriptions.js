import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { LoadingMessage, EmptyList  } from '../components/interface'
import { SubscriptionList } from '../components/subscriptions'

class SubscriptionsWrapper extends React.Component {

  render()  {
    const { subscriptions, requesting } = this.props

    if( !isLoaded(subscriptions) || requesting ) {
      return <LoadingMessage />
    }

    if(isEmpty(subscriptions) ) {
      return <EmptyList />
    }

    return <SubscriptionList subscriptions={subscriptions} />
  }
}

function mapStateToProps({ firebase: { data } }) {
  return { subscriptions: data.subscriptions }
}

function firebaseData({ status }, store) {
  return [{ path: `/userSubscriptions/${store.getState().firebase.auth.uid}`, storeAs: 'subscriptions', queryParams: ['orderByChild=status', `equalTo=${status}`] }]
}

SubscriptionsWrapper = firebaseConnect(firebaseData)(SubscriptionsWrapper)
SubscriptionsWrapper = connect(mapStateToProps)(SubscriptionsWrapper)

export { SubscriptionsWrapper }
