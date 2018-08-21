import { createSelector } from 'reselect'
import _ from 'lodash'

const getFirebaseData = ({ firebase: { data } }) => data

const productsSelector = createSelector(
  getFirebaseData,
  ({ products, customPrices })  => {

    // if(customPrices) {
    //   prices =
    //   //_.forEach(customPrices, (price, productId) => { products. })
    // }

    return _.merge( products, _.transform(customPrices,  transformCustomPrices, {}) )
  }
)

export default productsSelector

const transformCustomPrices = (result, price, productId ) =>  {
  result[productId] = { price }
}
