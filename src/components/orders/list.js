import React from 'react'
import _ from 'lodash'
//import { Table } from 'reactstrap'

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
                    <th>ID/Data</th>
                    <th>Serviço</th>
                    <th>Quant.</th>
                    <th>Perfil/Link</th>
                    <th>Cont. Inicial</th>
                    <th>Valor</th>
                    <th>Status</th>
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
