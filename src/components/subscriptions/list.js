import React from 'react'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import { SubscriptionListItem } from './'

class SubscriptionList extends React.PureComponent {

  render() {
    return (<div
              style={{overflow: 'scroll',
                      overflowX: 'scroll',
                      overflowY: 'hidden'
                    }}
              >
                <table className="table" >
                  <thead>
                  <tr>
                    <th><FormattedMessage id="order_list.headers.id" /></th>
                    <th><FormattedMessage id="order_list.headers.date" /></th>
                    <th><FormattedMessage id="order_list.headers.service" /></th>
                    <th><FormattedMessage id="order_list.headers.quantity" /></th>
                    <th><FormattedMessage id="order_list.headers.profile_link" /></th>
                    <th><FormattedMessage id="order_list.headers.amount" /></th>
                    <th><FormattedMessage id="order_list.headers.status" /></th>
                    <th>&nbsp;</th>
                  </tr>
                  </thead>
                  <tbody>
                    {_.map(this._orderSubscriptions(), this._renderSubscriptionItem )}
                  </tbody>
                </table>
              </div>)
  }

  _renderSubscriptionItem = (subscription) => {
    return <SubscriptionListItem subscription={subscription} key={`${subscription.id}`} />
  }

  _orderSubscriptions = () => {
    let subscriptions = []
    _.forEachRight(this.props.subscriptions, (subscription) => {
      subscriptions.push(subscription)
    })

    return subscriptions
  }
}

export { SubscriptionList }
