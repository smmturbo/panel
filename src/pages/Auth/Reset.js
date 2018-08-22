import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from 'reactstrap'
import { compose } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { notifyError } from '../../actions'
import { FormInput, PageHeader } from '../../components/interface'

class ResetPasswordPage extends Component {

  state = {authMode: 'login'}

  onSubmit({email})  {

    const { firebase, history, notifyError } = this.props

    firebase.auth().sendPasswordResetEmail(email).catch(error => notifyError(error.message))

    history.push('/login')
  }

  render()  {

    const { handleSubmit } = this.props

    return (
        <div>
          <PageHeader
            title={<FormattedMessage id="page.auth.reset_password.title" />}
            subtitle={<FormattedMessage id="page.auth.reset_password.subtitle" />}
          />

          <Card>
            <CardBody>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >

                <Field
                  name="email"
                  label="E-mail"
                  type="text"
                  placeholder="E-mail"
                  component={FormInput}
                />

                <div className="my-3">
                  <Button color="primary" ><FormattedMessage id="page.auth.reset_password.confirm" /></Button>
                </div>

                <hr/>

                <p className="text-center" >
                  <Link to="/login" ><FormattedMessage id="page.auth.reset_password.back" /></Link>
                </p>

              </form>

              {this._helmet()}
            </CardBody>
          </Card>
        </div>
    )
  }

  _helmet()  {
    const title = `Recover password / Recuperação de senha - AumentarSeguidores.com`
    return (<Helmet>
              <title>{title}</title>
              <meta property="og:title" content={title} />
              <meta property="og:url" content={`https://painel.AumentarSeguidores.com.br`} />
            </Helmet>)
  }
}

function validate(values) {
  const errors = {}

  if(!values.email) {
    errors.email = 'Please insert an email'
  }

  if(!values.password) {
    errors.password = 'Please inser a password'
  }

  return errors
}

ResetPasswordPage = connect(null, { notifyError })(ResetPasswordPage)
ResetPasswordPage = compose(withFirebase, reduxForm({validate, form: 'AuthLoginForm'}) )(ResetPasswordPage)

export default ResetPasswordPage
