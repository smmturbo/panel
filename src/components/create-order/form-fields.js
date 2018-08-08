import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Button, FormGroup, FormText, Card, CardBody } from 'reactstrap'
import { FormInput } from '../../components/interface'

import { notifySuccess } from '../../actions'

class CreateOrderProductFormFields extends Component {

  render()  {

    const { handleSubmit } = this.props

    return (<Card className="my-3" >
              <CardBody>
                <form onSubmit={handleSubmit(this._handleSubmit)} >

                  <h4>Add new product</h4>

                  <Row>
                    <Col>
                      <Field
                        name="id"
                        type="text"
                        label="ID do produto"
                        placeholder="12345"
                        component={FormInput}
                      />

                    </Col>
                    <Col>
                      <Field
                        name="label"
                        type="text"
                        label="Nome do produto"
                        placeholder="Ex.: Seguidores Instagram"
                        component={FormInput}
                      />

                    </Col>
                    <Col>
                      <Field
                        name="type"
                        type="text"
                        label="Tipo"
                        component={FormInput}
                      />

                    </Col>
                    <Col>
                      <Field
                        name="requiredDataType"
                        type="text"
                        label="Dado requerido"
                        component={FormInput}
                      />

                    </Col>
                  </Row>

                  <div className="my-2" >
                    <Button color="primary" >Criar produto</Button>
                  </div>

                </form>

              </CardBody>
            </Card>)
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

    this.props.handleSubmit(values)

    this.props.notifySuccess('Pedido enviado!')

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
            />
  }
}

function validate(values) {
  const errors = {}

  // if(!values.label) {
  //   errors.label = 'Product label is missing'
  // }
  //
  // if(!values.id) {
  //   errors.id = 'Product ID is missing'
  // }
  //
  // if(!values.type) {
  //   errors.type = 'Product type is missing'
  // }
  //
  // if(!values.requiredDataType) {
  //   errors.requiredDataType = 'Product required data type is missing'
  // }

  return errors
}

CreateOrderProductFormFields = reduxForm({validate, form: 'CreateOrderProductFormFieldsForm'})(CreateOrderProductFormFields)
CreateOrderProductFormFields = firebaseConnect()(CreateOrderProductFormFields)
CreateOrderProductFormFields = connect(null, { notifySuccess })(CreateOrderProductFormFields)

export { CreateOrderProductFormFields }
