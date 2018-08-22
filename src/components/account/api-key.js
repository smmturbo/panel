import React from 'react'
import { ListGroupItem, ListGroup, Button, Card, CardBody } from 'reactstrap'
import { isEmpty } from 'react-redux-firebase'
import { FormattedMessage } from 'react-intl'

import { URL_API } from '../../data/constants'

class ApiKey extends React.PureComponent {

  render()  {

    const { apiKey } = this.props

    if(isEmpty(apiKey) ) {
      return (<Card>
                <CardBody>
                  <p className="lead">
                    <FormattedMessage id="api_key.no_key" />
                  </p>
                  <Button onClick={this.props.handleAction} color="success" size="lg" >
                    <FormattedMessage id="api_key.create_key" />
                  </Button>
                </CardBody>
              </Card>)
    }

    return (<ListGroup>
              <ListGroupItem>
                Chave API
                <FormattedMessage id="api_key.api_key" />
                <h5>{apiKey.id}</h5>
              </ListGroupItem>
              <ListGroupItem>
                <FormattedMessage id="api_key.url" />
                <h5>{URL_API}</h5>
              </ListGroupItem>
            </ListGroup>)
  }
}

export { ApiKey }
