import { BALANCE_HISTORY_ADD_ENTRY } from '../actions'

const balanceTransactions = []

export default function(state = balanceTransactions, action) {

  switch(action.type)  {

    // Payload: id, value (+/- number), type [ addBalance, order], date, ref [orderId, NULL]

    case BALANCE_HISTORY_ADD_ENTRY:
      return {...state, [action.payload.id] : action.payload }
    default:

      return state
  }
}
