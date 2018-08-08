import React from 'react'
import _ from 'lodash'
//import { Table } from 'reactstrap'

import { BalanceTransactionsListItem } from './'

class BalanceTransactionsList extends React.PureComponent {

  render() {
    return (
          <table className="table" >
            <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Valor (R$)</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
              {_.map(this._orderBalanceTransactions(), this._renderBalanceTransactionItem )}
            </tbody>
          </table>
         )
  }

  _renderBalanceTransactionItem = (balanceTransaction) => {
    return <BalanceTransactionsListItem balanceTransaction={balanceTransaction} key={`${balanceTransaction.id}`} />
  }

  _orderBalanceTransactions = () => {
    let balanceTransactions = []
    _.forEachRight(this.props.balanceTransactions, (balanceTransaction) => {
      balanceTransactions.push(balanceTransaction)
    })

    return balanceTransactions
  }
}

export { BalanceTransactionsList }
