import React from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'
import _ from 'lodash'

class CreateOrderProductList extends React.PureComponent {

  render()  {

    const { products, ...rest } = this.props

    return (<ListGroup>
              { _.map(products, product => <CreateOrderProductListItem key={`copl-${product.id}`} product={product} {...rest} >{product.label}</CreateOrderProductListItem>) }
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
              <small>R${product.price} / 1000 unidades</small>
            </ListGroupItem>)
  }
}

export { CreateOrderProductList }
