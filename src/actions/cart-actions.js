export const CART_ADD_ITEM = 'cart_add_item'
export const CART_REMOVE_ITEM = 'cart_remove_item'
export const CART_UPDATE_STATUS = 'cart_update_status'
export const CART_CLOSE_CART = 'cart_close_cart'
export const CART_EMPTY_CART = 'cart_empty_cart'

export function actionAddToCart(products)  {

  return {
    type: CART_ADD_ITEM,
    payload: products
  }

}

export function actionRemoveFromCart(cartItemId)  {

  return {
    type: CART_REMOVE_ITEM,
    payload: cartItemId
  }

}

export function actionUpdateStatus(status)  {
  return {
    type: CART_UPDATE_STATUS,
    payload: status
  }
}

export function actionCloseCart(orderId)  {
  return {
    type: CART_CLOSE_CART,
    payload: orderId
  }
}

export function actionEmptyCart()  {
  return {
    type: CART_EMPTY_CART
  }
}
