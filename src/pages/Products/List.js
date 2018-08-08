import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'

import { PageHeader, LoadingMessage  } from '../../components/interface'
import { ProductList } from '../../components/products'

class ProductsPage extends React.Component {

  render()  {
    const { products } = this.props

    if(!isLoaded(products)) {
      return <LoadingMessage />
    }

    return (
      <div className="container" >
        <PageHeader title="Produtos" />
        <ProductList products={products} />
      </div>
    )
  }
}

function mapStateToProps({firebase: { data }}) {
  return { products: data.products }
}

function firebaseData(props) {
  return [{path: `/systemData/products`, storeAs: 'products'}]
}

ProductsPage = firebaseConnect(firebaseData)(ProductsPage)
ProductsPage = connect(mapStateToProps)(ProductsPage)

export { ProductsPage }
