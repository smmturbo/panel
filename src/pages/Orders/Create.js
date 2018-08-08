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
