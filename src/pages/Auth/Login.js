import React from 'react'
import { Helmet } from 'react-helmet'
import { UncontrolledAlert } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

import { AuthLogin } from '../../components/auth'
import { Whatsapp } from '../../components/interface'
import { PHONE_SUPPORT_PHONE } from '../../data/constants'

const LoginPage = () => {

  return (
      <div>
        <UncontrolledAlert>
          <h6><FormattedMessage id="page.auth.login.questions_talk_to_us" /></h6>
          <Whatsapp number={PHONE_SUPPORT_PHONE} />
        </UncontrolledAlert>
        <AuthLogin />
        <Helmet><title>{title}</title><meta property="og:title" content={title} /><meta property="og:url" content={`https://mercadomaritimo.com.br/login`} /></Helmet>
      </div>
  )
}

export default LoginPage

const title = "Login - AumentarSeguidores.com"
