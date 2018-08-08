import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Card, CardBody, Button } from 'reactstrap'
import { compose } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormInput, FormToggler, PageHeader } from '../interface'
import { notifyError } from '../../actions'
import { AuthToggler } from './'

class AuthLogin extends React.Component {

  onSubmit = async (values) => {
    const { firebase } = this.props
    if(values.email && values.password) {
      firebase.login(values).catch(error => this.props.notifyError(error.message))
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
                        label="Senha"
                        type="password"
                        placeholder="Senha (mín. 6 caracteres)"
                        component={FormInput}
                      />

                      <div className="my-3 d-flex justify-content-between align-items-center">
                        <Button color="primary" >Prosseguir</Button>
                        <Link to="/auth/reset" >Recuperar senha</Link>
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
    errors.email = 'Por favor insira um e-mail'
  }

  if(!values.password) {
    errors.password = 'Por favor insira senha'
  }

  return errors
}

AuthLogin = connect(null, { notifyError })(AuthLogin)
AuthLogin = compose(withFirebase, reduxForm({validate, form: 'AuthLoginForm'}) )(AuthLogin)

export { AuthLogin }
