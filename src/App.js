import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Route component={AppRoutes} />
    </BrowserRouter>
  )
}

export default App
