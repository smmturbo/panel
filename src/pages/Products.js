import React from 'react'

import { ProductsWrapper } from '../wrappers'
import { PageHeader } from '../components/interface'

class ProductsPage extends React.PureComponent {

  render()  {

    return (<div>
              <PageHeader title="Catálogo de Produtos" subtitle="Utilize as IDs para efetuar as Chamadas API" />

              <ProductsWrapper />

            </div>)
  }
}

export default ProductsPage
