import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function FormInput(field)  {

  const { meta: { touched, error} } = field

  const inputValid = touched && error ? false : null

  return (
    <FormGroup>

      {field.label ? <Label>{field.label}</Label>:''}

      <Input
        {...field.input}
        valid={inputValid}
        type={field.type}
        placeholder={field.placeholder}
      />
      { touched ? <FormFeedback>{error}</FormFeedback> : ''  }

    </FormGroup>
  )
}

export { FormInput }
