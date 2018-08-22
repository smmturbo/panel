import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Card, CardBody, Button } from 'reactstrap'
import { compose } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { FormInput, PageHeader, LoadingMessage } from '../interface'
import { notifyError } from '../../actions'
import { AuthToggler } from './'

class AuthRegister extends React.Component {

  state = { step: 0, processing: false }

  onSubmit = async (values) => {

    const { firebase } = this.props
    const { email, password, password_repeat, name, phone } = values
    const profile = { email, createdOn: Date.now() }

    this.setState({processing: true})

    if(name)  {
      profile.name = name
    }

    if(phone) {
      profile.phone = phone
    }

    if(email && password === password_repeat) {
      await firebase.createUser({ email, password }, profile ).catch(error => this.props.notifyError(error.message))

      this.setState({processing: false })
    }
    else {
      this.props.notifyError('E-mail not provided or passwords do not match.')
      this.setState({processing: false })
    }
  }

  render()  {

    return (<div>
              <PageHeader title="Login" />
                <Card>
                  <CardBody>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >

                      <AuthToggler mode="register" />

                      <Field
                        name="email" label="E-mail *" type="text"
                        placeholder="E-mail" component={FormInput}
                      />

                      <Field
                        name="password" label="Senha *" type="password"
                        placeholder="Password/Senha (mín. 6 )" component={FormInput}
                      />

                      <Field
                        name="password_repeat" label="Repita a senha" type="password"
                        placeholder="Repeat password" component={FormInput}
                      />

                      <Field
                        name="name" label="Nome" type="text"
                        placeholder="Name (optional)" component={FormInput}
                      />

                      <Field
                        name="phone"
                        label="Phone"
                        type="text"
                        placeholder="Phone (optional)"
                        component={FormInput}
                      />

                      <p><FormattedMessage id="auth.personal_info_privacy_message" /></p>

                      <div className="my-3 d-flex justify-content-between align-items-center">
                        <Button color="primary" ><FormattedMessage id="auth.register_button" /></Button>
                        { this.state.processing ? <LoadingMessage /> : '' }
                      </div>

                    </form>
                  </CardBody>
                </Card>
              </div>)
  }
}

function validate(values) {
  const errors = {}

  if(!values.email) {
    errors.email = 'E-mail is missing'
  }

  if(!values.password) {
    errors.password = 'Password is missing'
  }

  if(!values.password_repeat) {
    errors.password_repeat = 'Repeat password'
  }

  return errors
}

AuthRegister = connect(null, { notifyError })(AuthRegister)
AuthRegister = compose(withFirebase, reduxForm({validate, form: 'AuthRegisterForm'}) )(AuthRegister)

export { AuthRegister }
