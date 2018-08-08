import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

function FormToggler(field)  {
  return (
    <FormGroup check>
      <Label check>
        <Input {...field.input} type={field.type} checked={field.checked} /> {field.label}
      </Label>
    </FormGroup>
  )
}

export { FormToggler }
