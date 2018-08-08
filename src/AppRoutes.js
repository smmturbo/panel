import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import {
  LogoutPage, LoginPage, ResetPasswordPage, RegisterPage,
  DashboardPage,
  OrdersPage, ViewOrderPage, CreateOrderPage, SubscriptionsPage,
  NetworksPage, ViewNetworkPage,
  ProductsPage, ViewProductPage, EditProductPage, EditProductVariationPage,
  ViewBalancePage, AddBalancePage,
  AccountPage,
  HelpPage, TermsPage

} from './pages'

import { AppFooter, AppHeader } from './components/layout'
import { AppNotifications } from './components/interface'

import { UserIsAuthenticated, UserIsNotAuthenticated, UserIsOnboarded } from './utils/authorization-layer'

import { DEFAULT_SITE_URL } from './utils/constants'

class AppRoutes extends Component {

  render() {

    return (
      <div className="container h-100" style={{marginTop: '50px', paddingTop: '30px'}} >

        {this._helmet()}

        <AppHeader {...this.props} />

        <AppNotifications />

        <Switch>

          <Route path="/auth/reset" component={UserIsNotAuthenticated(ResetPasswordPage)} />
          <Route exact path="/logout" component={UserIsAuthenticated(LogoutPage)} />
          <Route exact path="/login" component={UserIsNotAuthenticated(LoginPage)} />
          <Route exact path="/register" component={UserIsNotAuthenticated(RegisterPage)} />

          <Route path="/orders/add" component={UserIsAuthenticated(CreateOrderPage)} />
          <Route path="/order/:orderId" component={UserIsAuthenticated(ViewOrderPage)} />
          <Route path="/orders" exact component={UserIsAuthenticated(OrdersPage)} />
          <Route path="/subscriptions" exact component={UserIsAuthenticated(SubscriptionsPage)} />

          <Route path="/balance/add" exact component={UserIsAuthenticated(AddBalancePage)} />
          <Route path="/balance" exact component={UserIsAuthenticated(ViewBalancePage)} />

          <Route path="/account" exact component={UserIsAuthenticated(AccountPage)} />

          <Route path="/support" exact component={HelpPage} />
          <Route path="/terms" exact component={TermsPage} />

          <Route path="/" exact component={UserIsAuthenticated(DashboardPage)} />

        </Switch>

        <AppFooter />

      </div>
    )
  }

  _helmet()  {
    const title = 'Painel - AumentarSeguidores.com'
    const description = 'O número um em seguidores e curtidas para Instagram e Facebook.'
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="author" content="AumentarSeguidores Social" />
        <meta name="keywords" content="seguidores instagram, seguidores facebook, curtidas instagram, curtidas facebook, famoso, fama, comprefama, comprar seguidores, comprar curtidas, instagram, facebook" />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,noodp" />
        <meta http-equiv="expires" content="-1" />
        <meta name="revisit-after" content="1 days" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={DEFAULT_SITE_URL} />
      </Helmet>
    )
  }
}

export { AppRoutes }
