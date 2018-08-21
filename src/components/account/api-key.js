import React from 'react'
import { ListGroupItem, ListGroup, Button, Card, CardBody } from 'reactstrap'
import { isEmpty } from 'react-redux-firebase'

import { URL_API } from '../../utils/constants'

class ApiKey extends React.PureComponent {

  render()  {

    const { apiKey } = this.props

    if(isEmpty(apiKey) ) {
      return (<Card>
                <CardBody>
                  <p className="lead">Você não tem uma Chave API.</p>
                  <Button onClick={this.props.handleAction} color="success" size="lg" >Criar Chave API</Button>
                </CardBody>
              </Card>)
    }

    return (<ListGroup>
              <ListGroupItem>
                Chave API
                <h5>{apiKey.id}</h5>
              </ListGroupItem>
              <ListGroupItem>
                URL
                <h5>{URL_API}</h5>
              </ListGroupItem>
            </ListGroup>)
  }
}

export { ApiKey }
