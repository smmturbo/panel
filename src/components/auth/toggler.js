import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class AuthToggler extends React.PureComponent {
  render()  {
    return (<div className="mb-3 text-center" >
              { this.props.mode === 'login' ? this.renderRegisterButton() : this.renderLoginButton() }
            </div>)
  }

  renderRegisterButton = () =>  {
    return (<div>
              <p>Não tem conta?</p>
              <Button color="primary" tag={Link} to="/register" >Cadastro gratuito</Button>
            </div>)
  }

  renderLoginButton = () => {
    return (<div>
              <p>Já tem conta?</p>
              <Button color="primary" outline tag={Link} to="/login" >Fazer login</Button>
            </div>)
  }
}

export { AuthToggler }
