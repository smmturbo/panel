import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { LoadingMessage, EmptyList  } from '../components/interface'
import { ProductList } from '../components/products'
import productsSelector from '../selectors/products'

class ProductsWrapper extends React.Component {

  render()  {
    const { products, requesting } = this.props

    if( !isLoaded(products) || requesting ) {
      return <LoadingMessage />
    }

    if(isEmpty(products) ) {
      return <EmptyList />
    }

    return <ProductList products={products} />
  }
}

function mapStateToProps(state, props) {
  return { products: productsSelector(state, props) }
}

const firebaseData = (props, store) =>  {
  const uid = store.getState().firebase.auth.uid
  return ['/products', {path: `/customPrices/${uid}`, storeAs: 'customPrices'} ]
}

ProductsWrapper = firebaseConnect(firebaseData)(ProductsWrapper)
ProductsWrapper = connect(mapStateToProps)(ProductsWrapper)

export { ProductsWrapper }
