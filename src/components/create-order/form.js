import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import { Button, Card, CardBody, FormGroup, FormText, Alert, Input, Label } from 'reactstrap'
import _ from 'lodash'

import { notifySuccess } from '../../actions'
import { LoadingMessage } from '../../components/interface'

import { generateOrder, generateQuantity } from '../../helpers/orders'
import Validators from '../../helpers/validators'
import { calculateCharge } from '../../helpers'

class CreateOrderForm extends React.Component {

  state = { quantity: 0, repeat: 0, error: false, errors: [], values: {} }

  render()  {

    const { product } = this.props

    if(isEmpty(product))  {
      return null
    }

    return (<Card>
              <CardBody>

                { this._renderErrors() }

                <p>{ product.description }</p>

                { _.map(product.fields, field => <OrderFormField key={`popf-${product.id}-${field.id}`} handleChange={this._handleChange} field={field} product={product} value={this.state.values[field.name]} /> ) }

                <p><small>Total: R${ this._calculateCharge() }</small></p>

                <div className="my-2" >
                  { this.props.processing ? <LoadingMessage /> : <Button color="primary" onClick={ this._handleAction } >Enviar pedido</Button> }
                </div>

              </CardBody>
            </Card>)
  }

  _handleChange = ({name, value}) => {
    const { values } = this.state
    const updatedValues = { ...values, [name]: value }
    this.setState({values: updatedValues})

    if(name === 'quantity' || name === 'posts') {
      this._handleQuantityChange({name, value})
    }
  }

  _handleQuantityChange = ({name, value}) =>  {
    const { product } = this.props
    const { quantity, repeat } = this.state

    var update = {}

    if(product.type === 'subscription') {
      if(name === 'posts')  {
        update = { quantity: (quantity * value), repeat: value }
      }

      if(name === 'quantity') {
        update = { quantity: repeat * value, repeat }
      }
    }
    else {
      update = { quantity: value }
    }

    this.setState(update)
  }

  _handleAction = () => {
    const { values } = this.state
    const { product, customPrices } = this.props

    const rawQuantity = parseInt(values.quantity, 10)

    const errorData = { error: false, errors: [] }
    this.setState({...errorData})

    // Detect quantities
    if(rawQuantity < product.minimum)  {
      errorData.error = true
      errorData.errors.push('Quantidade mínima é ' + product.minimum)
    }

    if(rawQuantity > product.maximum)  {
      errorData.error = true
      errorData.errors.push('Quantidade máxima é ' + product.maximum)
    }

    // Pass each item through a validator
    _.forEach( product.fields, field => {

      if(field.validator) {

        const validator = Validators[field.validator]
        const fieldValue = values[field.name]
        const validation = validator(fieldValue)

        if(validation.error)  {
          errorData.error = true
          errorData.errors.push(validation.message)
        }
        else {
          values[field.name] = validation.value
        }
      }
    })

    if(errorData.error) {
      this.setState({...errorData})
      return
    }
    else {

      const order = generateOrder(values, product, customPrices)

      this.props.handleAction(order)
      this._handleQuantityChange(0)
      this._reset()
      return
    }
  }

  _reset() {
    this.setState({values: {}})
  }

  _renderErrors = () => {
    const { error, errors } = this.state

    if(!error) {
      return null
    }

    return <Alert color="danger" ><ul>{ _.map( errors, message => <li key={message} >{ message }</li> ) }</ul></Alert>
  }

  _calculateCharge = () =>  {
    const { quantity } = this.state
    const { product, customPrices } = this.props
    const charge = calculateCharge({quantity}, product, customPrices )
    return isNaN(charge) ? 0 : charge
  }
}

class OrderFormField extends React.PureComponent {
  render()  {

    const { field, value, product } = this.props

    return (<FormGroup>
              <Label>{field.label} { field.name === 'quantity' ? <b>(Mínimo: { product.minimum } / Máximo: { product.maximum })</b> : null }</Label>
              <Input
                value={value || ''}
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                onChange={this._handleChange}
              />
              <FormText>{field.description}</FormText>
            </FormGroup>)
  }

  _handleChange = ({target: { name, value }}) => {
    this.props.handleChange( { name, value } )
  }
}

CreateOrderForm = firebaseConnect()(CreateOrderForm)
CreateOrderForm = connect(null, { notifySuccess })(CreateOrderForm)

export { CreateOrderForm }
