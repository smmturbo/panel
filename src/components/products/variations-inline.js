import React from 'react'
import _ from 'lodash'
import { Button } from 'reactstrap'

class ProductVariationsInline extends React.PureComponent {

  render()  {

    const { variations } = this.props
    const key = Math.floor(Math.random() * 100)

    return (<div className="d-flex justify-content-start align-items-center" >
              <span className="mr-2" >Variações:</span>
              { _.map(this._orderVariations(), ({id, quantity}) => <Button key={`${key}-${id}`} className="mx-1" size="sm" color="primary" outline >{quantity}</Button>) }
            </div>)
  }

  _orderVariations() {
    return _.sortBy(this.props.variations, ({quantity}) => quantity)
  }
}

export { ProductVariationsInline }
