export const BALANCE_ADD_BALANCE = 'balance_add_balance'
export const BALANCE_DEDUCT_BALANCE = 'balance_deduct_balance'

export function actionAddBalance(charge)  {
  return {
    type: BALANCE_ADD_BALANCE,
    payload: charge
  }
}

export function actionDeductBalance(charge)  {
  return {
    type: BALANCE_DEDUCT_BALANCE,
    payload: charge
  }
}
