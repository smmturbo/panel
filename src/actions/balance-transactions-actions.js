export const BALANCE_HISTORY_ADD_ENTRY = 'balance_history_add_entry'

export function actionAddBalanceTransactionEntry( charge, type, ref )  {

  var numberModifier = type === 'order' ? -1 : 1

  const payload = {
    id: Date.now(),
    charge: parseFloat( (numberModifier * parseFloat(charge)).toFixed(2) ),
    date: new Date().toString(),
    ref
  }

  return {
    type: BALANCE_HISTORY_ADD_ENTRY,
    payload
  }
}
