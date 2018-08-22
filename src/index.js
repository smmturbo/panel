import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
//import { PersistGate } from 'redux-persist/integration/react'

import { IntlProvider } from './languages/wrapper'

ReactDOM.render(
  <IntlProvider >
    <Provider store={ store } >
      <App />
    </Provider>
  </IntlProvider>

, document.getElementById('root'));
registerServiceWorker()

/*
<PersistGate loading={<LoadingMessage />} persistor={persistor} >
  <App />
</PersistGate>
*/
