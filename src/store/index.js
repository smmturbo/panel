import { createStore, applyMiddleware, compose } from 'redux'

//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'

import firebase from 'firebase'
import { reactReduxFirebase } from 'react-redux-firebase'

import firebaseConfig from './firebaseConfig'
import rootReducer from './reducer'

firebase.initializeApp(firebaseConfig)

const config = {
  reduxFirebase: { userProfile: 'profiles' }
}

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config.reduxFirebase))(createStoreWithMiddleware)

let store = createStoreWithFirebase(rootReducer)

export { store }

/*

const config = {
  persist: { key: 'appData', storage },
  reduxFirebase: { userProfile: 'profiles' },
  fileMetadataFactory: (uploadRes) => {
    // upload response from Firebase's storage upload
    const { metadata: { name, fullPath, downloadURLs } } = uploadRes
    // default factory includes name, fullPath, downloadURL
    return {
      name,
      fullPath,
      downloadURL: downloadURLs[0]
    }
  }
}

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config.reduxFirebase))(createStoreWithMiddleware)

const persistedReducer = persistReducer(config.persist, rootReducer)

let store = createStoreWithFirebase(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }

*/
