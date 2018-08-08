import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from '../reducers/auth'
import ordersReducer from '../reducers/orders'
import notificationsReducer from '../reducers/notifications'
import balanceReducer from '../reducers/balance'
import balanceTransactionsReducer from '../reducers/balance-transactions'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  form: formReducer,
  notifications: notificationsReducer,
  orders: ordersReducer,
  balance: balanceReducer,
  localAuth: authReducer,
  balanceTransactions: balanceTransactionsReducer
})

export default rootReducer
