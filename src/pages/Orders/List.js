import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { PageHeader, PageToolbar  } from '../../components/interface'
import { OrderStatusFilter } from '../../components/orders'
import { OrdersWrapper } from '../../wrappers'

class OrdersPage extends React.Component {

  state = { status: 'processing' }

  render()  {

    return (
      <div>
        <PageToolbar left={[ {label: <FormattedMessage id="page.orders.toolbar.create" />, to: `/orders/add`}] } />
        <PageHeader title={<FormattedMessage id="page.orders.title" />} />
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
    return <Helmet><title>Orders/ Pedidos - PainelAS</title></Helmet>
  }
}

export default OrdersPage
