import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ProductsWrapper } from '../wrappers'
import { PageHeader } from '../components/interface'

class ProductsPage extends React.PureComponent {

  render()  {

    return (<div>
              <PageHeader title={<FormattedMessage id="page.catalog.title" />} subtitle={<FormattedMessage id="page.catalog.subtitle" />} />
              <ProductsWrapper />
            </div>)
  }
}

export default ProductsPage
