import React from 'react'
import moment from 'moment'

import systemData from '../../utils/systemData'
const statuses = systemData.orderStatuses

class OrderListItem extends React.PureComponent {

  render()  {

    const { order } = this.props

    return (
      <tr>
        <td><small>{order.id}</small></td>
        <td>{ this._renderDate() }</td>
        <td>{order.product.label}</td>
        <td>{order.panelOrder.quantity}</td>
        <td>{ this._renderTarget() }</td>
        <td>R${order.amount}</td>
        <td>{ this._renderOrderStatus() }</td>
      </tr>
    )
  }

  _renderTarget() {
    const { order: { panelOrder: { link, profile } }} = this.props

    return link || profile
  }

  _renderDate() {
    return moment(this.props.order.createdOn).format('DD/MM - HH:mm')
  }

  _renderOrderStatus() {
    const { order: { status }} = this.props

    var textColor

    switch(status)  {
      case statuses.pending:
        textColor = 'text-muted'
      break

      case statuses.completed:
        textColor = 'text-success'
      break

      case statuses.cancelled:
        textColor = 'text-danger'
      break

      default:
        textColor = ''
    }

    return <span className={`${textColor}`} >{status}</span>
  }
}

export { OrderListItem }
