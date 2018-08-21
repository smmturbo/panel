import React from 'react'
import { Helmet } from 'react-helmet'
import { UncontrolledAlert } from 'reactstrap'

import { PageHeader, Whatsapp } from '../../components/interface'
import { CreateOrderWrapper } from '../../wrappers'

class CreateOrderPage extends React.Component {

  render()  {

    return (
      <div className="container" >
        <PageHeader title="Novo pedido" />

        <UncontrolledAlert>
          <h6>Problemas ou dúdivas?</h6>
          <Whatsapp number="21969534028" />
        </UncontrolledAlert>

        <UncontrolledAlert color="warning" >
          <h6>ATENÇÃO:</h6>

          <ul>
            <li><b>O perfil não pode estar em modo privado.</b></li>
            
            <li>Não realize a compra do mesmo serviço
            para o mesmo link caso ainda possua um pedido em andamento.</li>

	          <li>Confira atentamente a URL completa e a Quantidade. Uma vez iniciada
            a entrega, não é possível cancelar o pedido.</li>
          </ul>
        </UncontrolledAlert>

        <CreateOrderWrapper />

        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status, child) => {
    this.setState({status, child})
  }

  _helmet() {
    return <Helmet><title>Novo Pedido - PainelAS</title></Helmet>
  }
}

export { CreateOrderPage }
