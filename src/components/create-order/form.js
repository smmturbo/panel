import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, CardBody } from 'reactstrap'
import _ from 'lodash'

import { notifySuccess } from '../../actions'
import { FormInput } from '../../components/interface'

class CreateOrderForm extends React.Component {

  state = { quantity: 0 }

  render()  {

    const { product } = this.props

    if(isEmpty(product))  {
      return null
    }

    const { handleSubmit } = this.props

    return (<Card>
              <CardBody>
                <form onSubmit={handleSubmit(this._handleSubmit)} >
                  <small>Comprar</small>
                  <h5>{product.label}</h5>

                  { _.map(product.fields, field => <OrderFormField key={`popf-${product.id}-${field.id}`} handleChange={this._handleQuantityChange} field={field} /> ) }

                  { product.type === 'order' && <p><small>Total: R${ this._calculateCharge() }</small></p> }

                  <div className="my-2" >
                    { this.props.processing ? 'Processando' : <Button color="primary" >Enviar pedido</Button> }
                  </div>

                </form>
              </CardBody>
            </Card>)
  }

  _handleQuantityChange = (quantity) =>  {
    this.setState({ quantity })
  }

  _calculateCharge = () =>  {
    const { quantity } = this.state
    const { product } = this.props
    return Number(parseFloat(product.price) * parseFloat(quantity) / 1000).toFixed(2)

    //if(!!quantity && quantity > 0)  {

    //}

    //return
  }

  _handleSubmit = (values) => {

    // const { firebase, network } = this.props
    // const productId = values.id
    //
    // const product = {
    //   id: productId,
    //   label: values.label,
    //   requiredDataType: values.requiredDataType,
    //   type: values.type
    // }
    //
    // const updates = {}
    // updates[`/systemData/products/${productId}`] = product
    // firebase.ref().update(updates).then(() => this.props.notifySuccess('Product added'))

    this.props.handleAction(values)
    this._handleQuantityChange(0)
    this.props.reset()
  }
}

class OrderFormField extends React.PureComponent {
  render()  {

    const { field } = this.props

    return <Field
              name={field.name}
              type="text"
              label={field.label}
              placeholder={field.placeholder}
              component={FormInput}
              onChange={this._handleChange}
            />
  }

  _handleChange = ({target: {name, value}}) => {
    if(name === 'quantity') {
      this.props.handleChange(value)
    }
  }
}


function validate(values) {
  const errors = {}

  // if(!values.label) {
  //   errors.label = 'Product label is missing'
  // }

  return errors
}

CreateOrderForm = reduxForm({validate, form: 'CreateOrderForm'})(CreateOrderForm)
CreateOrderForm = firebaseConnect()(CreateOrderForm)
CreateOrderForm = connect(null, { notifySuccess })(CreateOrderForm)

export { CreateOrderForm }
