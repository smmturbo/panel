import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Button, FormGroup, Card, CardBody } from 'reactstrap'
import _ from 'lodash'

import { notifySuccess } from '../../actions'
import { FormInput, FormToggler, FormSelect, LoadingMessage } from '../../components/interface'

class CreateProductVariation extends Component {

  render()  {

    const { handleSubmit } = this.props

    return (<Card className="my-3" >
              <CardBody>
                <form onSubmit={handleSubmit(this._handleSubmit)} >

                  <h5>Create variation</h5>

                  <Row>
                    <Col sm="12" md="5" >
                      <Field
                        name="id"
                        type="text"
                        placeholder="ID WooCommerce"
                        component={FormInput}
                      />
                    </Col>
                    <Col sm="12" md="5" >
                      <Field
                        name="quantity"
                        type="text"
                        placeholder="Quantidade"
                        component={FormInput}
                      />
                    </Col>
                    <Col>
                      <Button color="primary" >Incluir variação</Button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>)
  }

  _handleSubmit = (values) => {
    const { firebase, product } = this.props
    const variationId = values.id
    const variation = {
      id: variationId,
      quantity: values.quantity
    }

    const updates = {}

    updates[`/systemData/products/${product.id}/variations/${variationId}`] = variation

    firebase.ref().update(updates).then(() => this.props.notifySuccess('Variation created'))
    this.props.reset()
  }
}

function validate(values) {
  const errors = {}

  if(!values.id) {
    errors.id = 'Variation ID is required'
  }

  if(!values.quantity) {
    errors.quantity = 'Variation quantity is required'
  }

  return errors
}

CreateProductVariation = reduxForm({validate, form: 'CreateProductVariationForm'})(CreateProductVariation)
CreateProductVariation = firebaseConnect()(CreateProductVariation)
CreateProductVariation = connect(null, { notifySuccess })(CreateProductVariation)

export { CreateProductVariation }
