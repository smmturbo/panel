import React from 'react'
import { Helmet } from 'react-helmet'
//import axios from 'axios'

import { PageHeader, PageToolbar  } from '../../components/interface'
import { SubscriptionStatusFilter } from '../../components/subscriptions'
import { SubscriptionsWrapper } from '../../wrappers'

class SubscriptionsPage extends React.Component {

  state = { status: 'active' }

  render()  {

    return (
      <div className="container" >
        <PageHeader title="Gerenciamento de assinaturas" />

        <PageToolbar left={[ {label: 'Novo pedido', to: `/orders/add`}] } />

        <SubscriptionStatusFilter status={this.state.status} handleClick={this._selectStatus} />

        <SubscriptionsWrapper status={this.state.status} />

        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status, child) => {
    this.setState({status, child})
  }

  _helmet() {
    return <Helmet><title>Gerenciamento de assinaturas - PainelAS</title></Helmet>
  }
}

export { SubscriptionsPage }
