import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import { connect } from 'react-redux'

import { PageHeader, LoadingMessage, PageToolbar  } from '../../components/interface'
import { CreateProductVariation, ProductVariations } from '../../components/products'

class ViewProductPage extends React.PureComponent {

  render()  {

    const { product } = this.props

    if(!isLoaded(product)) {
      return <LoadingMessage />
    }

    return (
      <div className="container" >

        <Breadcrumb>
          <BreadcrumbItem><a href="/">Início</a></BreadcrumbItem>
          <BreadcrumbItem><a href={`/products`}>Produtos</a></BreadcrumbItem>
          <BreadcrumbItem active>{product.label}</BreadcrumbItem>
        </Breadcrumb>

        <PageHeader title={product.label} subtitle={`ID WooCommerce #${product.id}`} />

        <PageToolbar left={[{label: 'Editar', to: `/products/edit/${product.id}`}]} />

        <CreateProductVariation product={product} />

        <ProductVariations variations={product.variations} handleVariationUpdate={this._handleVariationUpdate} />

      </div>
    )
  }

  _handleVariationUpdate = (variation) =>  {
    const { firebase, match: { params: { productId } } } = this.props
    firebase.ref(`/products/${productId}/variations/${variation.id}`).update(variation)
  }
}

function mapStateToProps({firebase: { data }}) {
  return { product: data.product }
}

function firebaseData({ match: { params }}) {
  return [{path: `/systemData/products/${params.productId}`, storeAs: 'product'}]
}

ViewProductPage = firebaseConnect(firebaseData)(ViewProductPage)
ViewProductPage = connect(mapStateToProps)(ViewProductPage)

export { ViewProductPage }
