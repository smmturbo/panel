import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import registerServiceWorker from './registerServiceWorker'

import { LoadingMessage } from './components/interface'

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
