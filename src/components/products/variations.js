import React from 'react'
import _ from 'lodash'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

import { EditProductVariation } from '../edit-products'

class ProductVariations extends React.PureComponent {

  render()  {

    const key = Math.floor(Math.random() * 100)

    return (<ListGroup>
              { _.map(this._orderVariations(), variation => <ProductVariationItem key={key + variation.id} variation={variation} {...this.props} />) }
            </ListGroup>)
  }

  _orderVariations() {
    return _.sortBy(this.props.variations, ({quantity}) => parseInt(quantity, 10))
  }
}

class ProductVariationItem extends React.Component {

  state = { edit: false }

  render()  {

    const { variation } = this.props

    if(this.state.edit)  {
      return <ListGroupItem><EditProductVariation variation={variation} onSubmit={this._handleSubmit} /></ListGroupItem>
    }

    return (<ListGroupItem className="d-flex justify-content-between" >
              <span>ID: #{variation.id} Quant: <b>{variation.quantity}</b></span>
              <Button onClick={this._toggleEdit} color="link" >editar</Button>
            </ListGroupItem>)
  }

  // `/products/editVariation/${variation.product}/${variation.id}`

  _toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  _handleSubmit = (variation) => {
    this.props.handleVariationUpdate(variation)
    this._toggleEdit()
  }
}

export { ProductVariations }
