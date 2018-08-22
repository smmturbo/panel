import React from 'react'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import { OrderListItem } from './'

class OrderList extends React.PureComponent {

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
                    <th><FormattedMessage id="order_list.headers.id_and_date" /></th>
                    <th><FormattedMessage id="order_list.headers.service" /></th>
                    <th><FormattedMessage id="order_list.headers.quantity" /></th>
                    <th><FormattedMessage id="order_list.headers.profile_link" /></th>
                    <th><FormattedMessage id="order_list.headers.initial_count" /></th>
                    <th><FormattedMessage id="order_list.headers.amount" /></th>
                    <th><FormattedMessage id="order_list.headers.status" /></th>
                  </tr>
                  </thead>
                  <tbody>
                    {_.map(this._orderOrders(), this._renderOrderItem )}
                  </tbody>
                </table>
              </div>)
  }

  _renderOrderItem = (order) => {
    return <OrderListItem order={order} key={`${order.id}`} />
  }

  _orderOrders = () => {
    let orders = []
    _.forEachRight(this.props.orders, (order) => {
      orders.push(order)
    })

    return orders
  }
}

export { OrderList }
