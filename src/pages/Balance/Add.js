import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

import { PageHeader, PageToolbar, PS } from '../../components/interface'
import { BankAccountsWrapper } from '../../wrappers'
import { TEMP_ADD_BALANCE_PRODUCT_URL } from '../../utils/constants'

class AddBalancePage extends Component {

  render()  {

    return (
      <div>

        <PageHeader
          title="Adicionar créditos"
          subtitle="Escolha uma conta bancária e, após transferir, faça upload do comprovante para efetuarmos a liberação."
        />

        <PageToolbar left={[{label: 'Voltar', to: `/`}]} />

        <PS>PagSeguro / Mercado Pago</PS>

        <Card>
          <CardHeader>Cartão de Crédito e Boleto Bancário</CardHeader>
          <CardBody>
            <a href={TEMP_ADD_BALANCE_PRODUCT_URL} target="_blank" className="btn btn-primary" >
              Pagar via PagSeguro e Mercado Pago
            </a>
          </CardBody>
        </Card>

        <PS>Transferência Bancária</PS>

        <BankAccountsWrapper />

      </div>
    )
  }
}

export default AddBalancePage
