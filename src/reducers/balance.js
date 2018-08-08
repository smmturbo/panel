import { BALANCE_ADD_BALANCE, BALANCE_DEDUCT_BALANCE } from '../actions'

const balance = {
  before: 0,
  current: 0,
  modifiedOn: new Date().toString()
}

export default function(state = balance, action) {

  switch(action.type)  {

    case BALANCE_ADD_BALANCE:
      return balanceModifier(state, 'sum', action.payload)

    case BALANCE_DEDUCT_BALANCE:
      return balanceModifier(state, 'subtract', action.payload)

    default:

      return state
  }
}

const balanceModifier = (balance, operation, value) => {

  value = Number.parseFloat(value)
  var before = Number.parseFloat(balance.current)
  var current

  switch(operation) {
    case 'sum':
      current = before + value
    break
    case 'subtract':
      current = before - value
    break
    default:
      current = before
  }

  current = Number.parseFloat( Number.parseFloat(current).toFixed(2) )
  return { before, current, modifiedOn: new Date().toString() }
}
