import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthLogin } from '../../components/auth'

const LoginPage = () => {

  return (
      <div>
        <AuthLogin />
        <Helmet><title>{title}</title><meta property="og:title" content={title} /><meta property="og:url" content={`https://mercadomaritimo.com.br/login`} /></Helmet>
      </div>
  )
}

export { LoginPage }

const title = "Login - AumentarSeguidores.com"
