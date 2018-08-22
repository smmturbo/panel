import React from 'react'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import _ from 'lodash'

import { LoadingMessage, EmptyList  } from '../components/interface'
import { BalanceTransactionsList } from '../components/balance-transactions'

class BalanceTransactionsWrapper extends React.Component {

  render()  {
    const { balanceTransactions } = this.props

    if( !isLoaded(balanceTransactions) ) {
      return <LoadingMessage />
    }

    if(isEmpty(balanceTransactions) ) {
      return <EmptyList />
    }

    return <BalanceTransactionsList balanceTransactions={_.orderBy(balanceTransactions, ['id', 'desc'])} />
  }
}

// function mapStateToProps({ firebase: { data, requesting } }) {
//   return { orders: data.orders, requesting: requesting.orders }
// }
//
// function firebaseData({ child, status }) {
//   const extraParams = {}
//   if(status)  {
//     extraParams['queryParams'] = [`orderByChild=${child}`, `equalTo=${status}`]
//   }
//   return [{ path: `/orders`, ...extraParams }]
// }

function mapStateToProps({ balanceTransactions }) {
  return { balanceTransactions }
}

//BalanceTransactionsWrapper = firebaseConnect(firebaseData)(BalanceTransactionsWrapper)
BalanceTransactionsWrapper = connect(mapStateToProps)(BalanceTransactionsWrapper)

export { BalanceTransactionsWrapper }
