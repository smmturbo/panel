import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import { PageHeader, PageToolbar, LinkList, LinkListItem } from '../../components/interface'
import { ApiKeyWrapper } from '../../wrappers'

class ApiKeyPage extends Component {

  render()  {

    return (
      <div>

        <PageToolbar left={[{label: <FormattedMessage id="page.account.api.back" />, to: `/`}]} />

        <PageHeader
          title={<FormattedMessage id="page.account.api.title" />}
          subtitle={<FormattedMessage id="page.account.api.subtitle" />}
        />

        <ApiKeyWrapper />

        <LinkList>
          <LinkListItem to="/apidocs" ><FormattedMessage id="page.account.api.api_docs" /></LinkListItem>
        </LinkList>

      </div>
    )
  }
}

export default ApiKeyPage
