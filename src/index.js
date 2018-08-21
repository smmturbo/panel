import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
//import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store'

import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css';

import App from './App'

ReactDOM.render(

  <Provider store={ store } >
    <App />
  </Provider>

, document.getElementById('root'));
registerServiceWorker()

/*
<PersistGate loading={<LoadingMessage />} persistor={persistor} >
  <App />
</PersistGate>
*/
