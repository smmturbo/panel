import React from 'react'
import { Helmet } from 'react-helmet'
import { UncontrolledAlert } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

import { PageHeader, Whatsapp } from '../../components/interface'
import { CreateOrderWrapper } from '../../wrappers'

import { PHONE_SUPPORT_PHONE } from '../../data/constants'

class CreateOrderPage extends React.Component {

  render()  {

    return (
      <div className="container" >
        <PageHeader title={<FormattedMessage id="page.orders.create.title" />} />

        <UncontrolledAlert>
          <h6><FormattedMessage id="page.orders.create.alert.problems_or_questions" /></h6>
          <Whatsapp number={PHONE_SUPPORT_PHONE} />
        </UncontrolledAlert>

        <UncontrolledAlert color="warning" >
          <h6><FormattedMessage id="page.orders.create.warnings.title" /></h6>

          <ul>
            <li><b><FormattedMessage id="page.orders.create.warnings.private_profile" /></b></li>
            <li><FormattedMessage id="page.orders.create.warnings.no_double_order" /></li>
	          <li><FormattedMessage id="page.orders.create.warnings.attention_to_data" /></li>
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
    return <Helmet><title>New order / Novo pedido - PainelAS</title></Helmet>
  }
}

export default CreateOrderPage
