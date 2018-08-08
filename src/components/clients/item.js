import React from 'react'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class ClientListItem extends React.PureComponent {

  render()  {

    const { client } = this.props

    return (
      <ListGroupItem action tag={Link} to={`/clients/${client.id}`} >
        <ListGroupItemHeading>
          {client.email} {client.name ? `(${client.name})` : null }
        </ListGroupItemHeading>
        <ListGroupItemText>Compras: R$ 2500</ListGroupItemText>
      </ListGroupItem>
    )
  }
}

export { ClientListItem }
