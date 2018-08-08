import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

class BalanceTransactionsListItem extends React.PureComponent {

  render()  {

    const { balanceTransaction } = this.props

    return (
      <tr>
        <td>{ balanceTransaction.id }</td>
        <td>{ this._renderDate() }</td>
        <td>{ balanceTransaction.amount }</td>
        <td>{ this._renderRefLink() }</td>
      </tr>
    )
  }

  _renderDate() {
    return moment.utc(this.props.balanceTransaction.date).local().format('DD/MM - HH:mm')
  }

  _renderRefLink()  {
    const { balanceTransaction } = this.props
    return balanceTransaction.type === 'order' ? <Link to={`/orders/${balanceTransaction.ref}`} >Pedido #{balanceTransaction.ref}</Link> : null
  }
}

export { BalanceTransactionsListItem }
