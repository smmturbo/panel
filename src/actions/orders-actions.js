export const ORDER_ADD_ORDER = 'order_add_order'
export const ORDER_UPDATE_ORDER = 'order_update_order'

export function actionCreateOrder(order)  {
  return {
    type: ORDER_ADD_ORDER,
    payload: order
  }
}

export function actionUpdateOrder(order)  {
  return {
    type: ORDER_UPDATE_ORDER,
    payload: order
  }
}
