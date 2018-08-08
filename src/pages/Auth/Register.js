import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthRegister } from '../../components/auth'

const RegisterPage = () => {

  return (
      <div>
        <AuthRegister />
        <Helmet><title>{title}</title><meta property="og:title" content={title} /><meta property="og:url" content={`https://mercadomaritimo.com.br/login`} /></Helmet>
      </div>
  )
}

export { RegisterPage }

const title = "Cadastro - AumentarSeguidores.com"
