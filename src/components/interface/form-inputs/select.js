import React, { Component } from 'react'
import _ from 'lodash'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class FormSelect extends Component  {

  renderOptions() {
    const { options } = this.props
    const key = Math.floor(Math.random() * 10000)
    return _.map(options, ({value, label}) => { return <option key={`${key}-${value}`} value={value} >{label}</option> } )
  }

  render() {

    const { label, inline, meta: { touched, error}, input } = this.props

    const inputClassName = `input  ${ touched && error ? 'danger' : ''}`

    return (
      <FormGroup>
        { !inline ? <Label>{label}</Label> : null }
        <Input type="select" {...input} className={inputClassName} >
          <option value="" >-- { inline ? label : 'Select an option' } --</option>
          {this.renderOptions()}
        </Input>
        { touched ? <FormFeedback>{ error}</FormFeedback> : ''  }
      </FormGroup>
    )
  }
  
}

export { FormSelect }
