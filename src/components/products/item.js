import React from 'react'
import _ from 'lodash'

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class ProductListItem extends React.PureComponent {

  render() {

    const { product } = this.props

    return (<ListGroupItem>
              <ListGroupItemHeading>{product.label}</ListGroupItemHeading>
              <ListGroupItemText>Preço: R${product.price} / 1000</ListGroupItemText>
              <ListGroupItemText>ID: {product.id}</ListGroupItemText>
            </ListGroupItem>)
  }
}

export { ProductListItem }
