export const BALANCE_ADD_BALANCE = 'balance_add_balance'
export const BALANCE_DEDUCT_BALANCE = 'balance_deduct_balance'

export function actionAddBalance(amount)  {
  return {
    type: BALANCE_ADD_BALANCE,
    payload: amount
  }
}

export function actionDeductBalance(amount)  {
  return {
    type: BALANCE_DEDUCT_BALANCE,
    payload: amount
  }
}
