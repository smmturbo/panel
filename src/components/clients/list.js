import React from 'react'
import _ from 'lodash'
import { ListGroup, ListGroupItem } from 'reactstrap'

import { ClientListItem } from './'

class ClientList extends React.PureComponent {

  render() {
    return (
          <ListGroup>
            {_.map(this._clientClients(), this._renderClientItem )}
          </ListGroup>
         )
  }

  _renderClientItem = (client) => {
    return <ClientListItem client={client} key={`${client.id}`} />
  }

  _clientClients = () => {
    let clients = []
    _.forEachRight(this.props.clients, (client) => {
      clients.push(client)
    })

    return clients
  }
}

export { ClientList }
