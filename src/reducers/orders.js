import { ORDER_ADD_ORDER, ORDER_UPDATE_ORDER } from '../actions'

export default function(state = {}, action) {

  switch(action.type)  {

    case ORDER_ADD_ORDER:
      return {...state, [action.payload.id] : action.payload }

    case ORDER_UPDATE_ORDER:
      return {...state, [action.payload.id] : action.payload }

    default:

      return state
  }
}
