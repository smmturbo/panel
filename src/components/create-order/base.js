import React from 'react'
import { Row, Col } from 'reactstrap'
import _ from 'lodash'
import { isEmpty } from 'react-redux-firebase'

import { generateOrder } from '../../helpers/orders'

import { CreateOrderCategoryList, CreateOrderProductList, CreateOrderForm } from './'

class CreateOrder extends React.Component {

  state = { category: {}, product: {} }

  render()  {

    return (<div className="my-3" >
              <CreateOrderCategoryList categories={this.props.categories} handleClick={this._selectCategory} />

              <Row>
                <Col sm="12" md="4" className="mb-3" >
                  <CreateOrderProductList
                    products={this._filterProducts()}
                    handleClick={this._selectProduct}
                    selected={this.state.product}
                  />
                </Col>
                <Col sm="12" md="8">
                  <CreateOrderForm product={this.state.product} handleAction={this._placeOrder} processing={this.props.processing} />
                </Col>
              </Row>

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

  _placeOrder = (values) => {
    const { product } = this.state
    const order = generateOrder(values, product)
    this.props.handleAction(order)
    return
  }
}

export { CreateOrder }
