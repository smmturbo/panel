import React from 'react'
import _ from 'lodash'
import { isEmpty } from 'react-redux-firebase'

import { CreateOrderCategoryList, CreateOrderProductList, CreateOrderForm } from './'
import { ProductAlerts } from '../products'

class CreateOrder extends React.Component {

  state = { category: {}, product: {} }

  render()  {

    return (<div className="my-3" >

              <CreateOrderCategoryList categories={this.props.categories} handleClick={this._selectCategory} />

              <CreateOrderProductList
                products={this._filterProducts()}
                handleClick={this._selectProduct}
                selected={this.state.product}
              />

              <ProductAlerts alerts={this.state.product.alerts} />

              <div className="my-3" >
                <CreateOrderForm product={this.state.product} handleAction={this._placeOrder} {...this.props} />
              </div>
            </div>)
  }

  _selectCategory = (category) => {
    this.setState({category})

    this._selectProduct({})
  }

  _selectProduct = (product) => {
    this.setState({product})
  }

  _filterProducts = () => {
    const { products } = this.props

    if(isEmpty(this.state.category))  {
      return products
    }

    return _.filter( products, p => p.category === this.state.category.id )
  }

  _placeOrder = (order) => {
    this.props.handleAction(order)
    return
  }
}

export { CreateOrder }
