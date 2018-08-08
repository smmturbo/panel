import React, { Component } from 'react'

import { PageHeader, PageToolbar } from '../../components/interface'
import { BankAccountsWrapper } from '../../wrappers'

class AddBalancePage extends Component {

  render()  {

    return (
      <div>

        <PageHeader
          title="Adicionar créditos"
          subtitle="Escolha uma conta bancária e, após transferir, faça upload do comprovante para efetuarmos a liberação."
        />

        <PageToolbar left={[{label: 'Voltar', to: `/`}]} />

        <BankAccountsWrapper />

      </div>
    )
  }
}

export { AddBalancePage }
