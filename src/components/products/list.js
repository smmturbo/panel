import React from 'react'
import _ from 'lodash'
import { ListGroup } from 'reactstrap'

import { ProductListItem } from './'

class ProductList extends React.PureComponent {

  render() {

    const { products } = this.props

    return (<ListGroup>
              { _.map(products, product => <ProductListItem product={product} key={`product-alerts-${product.id}`} />) }
            </ListGroup>)
  }
}

export { ProductList }
