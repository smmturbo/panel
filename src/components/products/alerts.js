import React from 'react'
import _ from 'lodash'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { isEmpty } from 'react-redux-firebase'
import { FormattedMessage } from 'react-intl'

class ProductAlerts extends React.PureComponent {

  render() {

    const { alerts } = this.props

    if(isEmpty(alerts)) {
      return null
    }

    return (<ListGroup className="my-3" >
              <ListGroupItem>
                <h6><FormattedMessage id="products.title.attention" /></h6>
                <ul>
                {_.map(alerts, ({id, text}) => <li key={`product-alerts-${id}`}>{text}</li> )}
                </ul>
              </ListGroupItem>
            </ListGroup>)
  }
}

export { ProductAlerts }
