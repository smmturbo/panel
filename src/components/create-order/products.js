import React from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'

class CreateOrderProductList extends React.Component {

  state = { hasSelected: false }

  render()  {

    const { products, selected, ...rest } = this.props

    if(selected.id)  {
      return this.renderSelectedProduct()
    }

    return (<ListGroup>
              { _.map(products, product => <CreateOrderProductListItem key={`copl-${product.id}`} product={product} {...rest} >{product.label}</CreateOrderProductListItem>) }
            </ListGroup>)
  }

  renderSelectedProduct = () => {

    const { selected, handleClick } = this.props

    return (<ListGroup>
              <ListGroupItem action onClick={ () => handleClick({}) } >
                <FontAwesomeIcon icon={faAngleLeft} /> <FormattedMessage id="create_order.back" />
              </ListGroupItem>

              <ListGroupItem>
                <small>
                  <FormattedMessage id="create_order.list_title_buying" />
                </small>
                <h6>{ selected.label }</h6>
                <small>R${ selected.price } <FormattedMessage id="create_order.per_thousand_units" /></small>
              </ListGroupItem>
           </ListGroup>)
  }
}

class CreateOrderProductListItem extends React.PureComponent  {

  render() {
    const { product, handleClick, selected } = this.props

    return (<ListGroupItem
              action onClick={() => handleClick(product)}
              active={ selected && selected.id === product.id ? true : false }
            >
              <h6>{product.label}</h6>
              <small>R${product.price} <FormattedMessage id="create_order.per_thousand_units" /></small>
            </ListGroupItem>)
  }
}

export { CreateOrderProductList }
