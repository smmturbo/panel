import React from 'react'
import { Helmet } from 'react-helmet'
//import axios from 'axios'

import { PageHeader, PageToolbar  } from '../../components/interface'
import { OrderStatusFilter } from '../../components/orders'
import { OrdersWrapper } from '../../wrappers'

class OrdersPage extends React.Component {

  state = { status: 'processing' }

  render()  {

    return (
      <div className="container" >
        <PageHeader title="Gerenciamento de pedidos" />

        <PageToolbar left={[ {label: 'Novo pedido', to: `/orders/add`}] } />

        <OrderStatusFilter status={this.state.status} handleClick={this._selectStatus} />

        <OrdersWrapper status={this.state.status} />

        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status) => {
    this.setState({status})
  }

  _helmet() {
    return <Helmet><title>Gerenciamento de pedidos - PainelAS</title></Helmet>
  }
}

export { OrdersPage }
