import React from 'react'
import { connect } from 'react-redux'
//import { Field, reduxForm } from 'redux-form'
import { Label, Input, Button, FormGroup } from 'reactstrap'
import _ from 'lodash'

import { FormInput } from '../interface'

class EditProductVariation extends React.Component {

  state = { quantity: '' }

  render()  {

    const { variation } = this.props

    return (
      <div>
        <FormGroup>
          <Label for="edit-variation-quantity" >Preço da variação ({variation.quantity})</Label>
          <Input
            name="quantity"
            id="edit-variation-quantity"
            type="text"
            placeholder="Quantidade da variação"
            value={this.state.quantity}
            onChange={this._handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Button color="primary" onClick={this._handleSubmit} >Atualizar variação</Button>
        </FormGroup>
      </div>
    )
  }

  componentDidMount() {
    const { variation } = this.props
    this.setState({quantity: variation.quantity})
  }

  _handleSubmit = () => {
    const { variation } = this.props
    variation.quantity = this.state.quantity
    this.props.onSubmit(variation)
  }

  _handleChange = (event) => {
    //const { variation } = this.state
    //variation[event.target.name] = event.target.value
    this.setState({[event.target.name]: event.target.value})
  }
}

export { EditProductVariation }
