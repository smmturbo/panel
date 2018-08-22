import React from 'react'
import moment from 'moment'

import systemData from '../../data/system'
const statuses = systemData.orderStatuses

class SubscriptionListItem extends React.PureComponent {

  render()  {

    const { subscription } = this.props

    return (
      <tr>
        <td>{subscription.id}</td>
        <td>{ this._renderDate() }</td>
        <td>{subscription.product.label}</td>

        <td>{subscription.panelOrder.quantity}</td>
        <td>{ this._renderTarget() }</td>

        <td>R${subscription.charge}</td>
        <td>{ this._renderSubscriptionStatus() }</td>
        <td>&nbsp;</td>
      </tr>
    )
  }

  _renderDate() {
    return moment(this.props.subscription.createdOn).format('DD/MM - HH:mm')
  }

  _renderTarget() {
    const { subscription: { panelOrder: { link, profile, username } }} = this.props

    return link || profile || username
  }

  _renderSubscriptionStatus() {
    const { subscription: { status } } = this.props

    var textColor

    switch(status)  {
      case statuses.active:
        textColor = 'text-primary'
      break

      case statuses.paused:
        textColor = 'text-muted'
      break

      case statuses.pending:
        textColor = 'text-muted'
      break

      case statuses.completed:
        textColor = 'text-success'
      break

      case statuses.canceled:
        textColor = 'text-danger'
      break

      default:
        textColor = ''
    }

    return <span className={`${textColor}`} >{status}</span>
  }
}

export { SubscriptionListItem }
