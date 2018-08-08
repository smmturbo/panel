import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import { ProductVariationsInline } from './'

class ProductListItem extends React.PureComponent {

  render()  {

    const { product } = this.props

    return (
      <ListGroupItem action tag={Link} to={`/products/${product.id}`} >
        <h4>{product.label}</h4>
        <div className="my-2">
          #{product.id} | Type: {product.type} | Required data type: {product.requiredDataType}
        </div>
        <ProductVariationsInline variations={product.variations} />
      </ListGroupItem>
    )
  }
}

export { ProductListItem }
