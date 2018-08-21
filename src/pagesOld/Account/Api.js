import React, { Component } from 'react'

import { PageHeader, PageToolbar, PS } from '../../components/interface'
import { ApiKeyWrapper } from '../../wrappers'

class ApiKeyPage extends Component {

  render()  {

    return (
      <div>

        <PageToolbar left={[{label: 'Voltar', to: `/`}]} />

        <PageHeader
          title="Chave API"
          subtitle="Faça requisições para nossa API para automatizar seus pedidos."
        />

        <ApiKeyWrapper />

        <PS>Instruções de Uso</PS>

        <p>Com nossa API você pode inserir e verificar status de pedidos.</p>

        <h4>Adicionar um pedido</h4>
        <p>Requisição para..</p>

      </div>
    )
  }
}

export { ApiKeyPage }
