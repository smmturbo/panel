import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

class AuthToggler extends React.PureComponent {
  render()  {
    return (<div className="mb-3 text-center" >
              { this.props.mode === 'login' ? this.renderRegisterButton() : this.renderLoginButton() }
            </div>)
  }

  renderRegisterButton = () =>  {
    return (<div>
              <p>
                <FormattedMessage id="auth.no_account_text" />
              </p>
              <Button color="primary" tag={Link} to="/register" >
                <FormattedMessage id="auth.no_account_button" />
              </Button>
            </div>)
  }

  renderLoginButton = () => {
    return (<div>
              <p>
                <FormattedMessage id="auth.has_account_text" />
              </p>

              <Button color="primary" outline tag={Link} to="/login" >
                <FormattedMessage id="auth.has_account_button" />
              </Button>
            </div>)
  }
}

export { AuthToggler }
