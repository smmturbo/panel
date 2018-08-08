import React from 'react'
import { Helmet } from 'react-helmet'
//import axios from 'axios'

import { PageHeader, LoadingMessage, PageToolbar  } from '../../components/interface'
import { SubscriptionStatusFilter } from '../../components/subscriptions'
import { SubscriptionsWrapper } from '../../wrappers'

import systemData from "../../utils/systemData"

class SubscriptionsPage extends React.Component {

  state = { status: 'pending' }

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

  // componentDidMount() {
  //   axios.get('https://us-central1-famaja-pagamento.cloudfunctions.net/testCheckordersStatuses').catch(error => console.log(error))
  // }
}

export { SubscriptionsPage }
