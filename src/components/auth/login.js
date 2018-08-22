import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Card, CardBody, Button } from 'reactstrap'
import { compose } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { FormInput, PageHeader, LoadingMessage } from '../interface'
import { notifyError } from '../../actions'
import { AuthToggler } from './'

class AuthLogin extends React.Component {

  state = { processing: false }

  onSubmit = async (values) => {

    this.setState({processing: true})

    const { firebase } = this.props

    if(values.email && values.password) {
      await firebase.login(values).catch(error => this.props.notifyError(error.message))
      this.setState({processing: false})
    }
    else {
      this.props.notifyError('Username or password missing')
      this.setState({processing: false})
    }
  }

  render()  {

    return (<div>
              <PageHeader title="Login" />
                <Card>
                  <CardBody>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >

                      <AuthToggler mode="login" />

                      <Field
                        name="email"
                        label="E-mail"
                        type="text"
                        placeholder="E-mail"
                        component={FormInput}
                      />

                      <Field
                        name="password"
                        label="Password / Senha"
                        type="password"
                        placeholder="Min 6 chars"
                        component={FormInput}
                      />

                      <div className="my-3 d-flex justify-content-between align-items-center">
                        <Button color="primary" >
                          <FormattedMessage id="auth.login_button" />
                        </Button>
                        { this.state.processing ? <LoadingMessage /> : '' }
                        <Link to="/auth/reset" >
                          <FormattedMessage id="auth.recover_password" />
                        </Link>
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
    errors.email = 'Insert e-mail'
  }

  if(!values.password) {
    errors.password = 'Insert password'
  }

  return errors
}

AuthLogin = connect(null, { notifyError })(AuthLogin)
AuthLogin = compose(withFirebase, reduxForm({validate, form: 'AuthLoginForm'}) )(AuthLogin)

export { AuthLogin }
