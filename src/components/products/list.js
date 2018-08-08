import React from 'react'
import _ from 'lodash'

import { LinkList } from '../interface'
import { ProductListItem } from './'

class ProductList extends React.PureComponent {

  render() {
    return (
          <LinkList>
            {_.map(this.props.products, product => <ProductListItem product={product} key={`${product.id}`} /> )}
          </LinkList>
         )
  }
}

export { ProductList }
