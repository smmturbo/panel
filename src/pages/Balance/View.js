import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader, PageToolbar } from '../../components/interface'
import { BalanceTransactionsWrapper } from '../../wrappers'

class ViewBalancePage extends Component {

  render()  {

    return (
      <div>
        <PageHeader title="Créditos" subtitle={`R$${this.props.balance.current}`} />

        <PageToolbar left={[{label: 'Voltar', to: `/`}, {label: 'Adicionar', to: `/balance/add`}]} />

        <h4>Histórico de transações</h4>

        <BalanceTransactionsWrapper />

      </div>
    )
  }
}

// const firebaseData = ({ match: { params }}) => {
//   return [{path: `/products/${params.productId}`, storeAs: 'product'}]
// }

function mapStateToProps({balance}) {
  return { balance }
}

//ViewBalancePage = firebaseConnect(firebaseData)(ViewBalancePage)
ViewBalancePage = connect(mapStateToProps)(ViewBalancePage)

export default ViewBalancePage
