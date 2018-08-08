import React from 'react'
import _ from 'lodash'
//import { Table } from 'reactstrap'

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
                    <th>ID</th>
                    <th>Data</th>
                    <th>Serviço</th>
                    <th>Quantidade</th>
                    <th>Perfil/Link</th>
                    <th>Valor</th>
                    <th>Status</th>
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
