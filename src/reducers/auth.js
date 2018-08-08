import { AUTH_REMOVE_UID, AUTH_REGISTER_UID } from '../actions'

const defaultAuth = {uid: null}

export default function(state = defaultAuth, action) {

  switch(action.type)  {

    case AUTH_REGISTER_UID:
      return {uid: action.payload}

    case AUTH_REMOVE_UID:
      return defaultAuth

    default:

      return state
  }
}
