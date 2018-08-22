import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { PageHeader, PageToolbar  } from '../../components/interface'
import { SubscriptionStatusFilter } from '../../components/subscriptions'
import { SubscriptionsWrapper } from '../../wrappers'

class SubscriptionsPage extends React.Component {

  state = { status: 'active' }

  render()  {

    return (
      <div>
        <PageToolbar left={[ {label: <FormattedMessage id="page.subscriptions.toolbar.create" />, to: `/orders/add`}] } />
        <PageHeader title={<FormattedMessage id="page.subscriptions.title" />} />
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
    return <Helmet><title>Subscriptions / Assinaturas - PainelAS</title></Helmet>
  }
}

export default SubscriptionsPage
