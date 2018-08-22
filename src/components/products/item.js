import React from 'react'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class ProductListItem extends React.PureComponent {

  render() {

    const { product } = this.props

    return (<ListGroupItem>
              <ListGroupItemHeading>{product.label}</ListGroupItemHeading>
              <ListGroupItemText><FormattedMessage id="products.price" />: R${product.price} / 1000</ListGroupItemText>
              <ListGroupItemText><FormattedMessage id="products.id" />: {product.id}</ListGroupItemText>
            </ListGroupItem>)
  }
}

export { ProductListItem }
