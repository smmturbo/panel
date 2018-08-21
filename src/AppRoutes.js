import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { AppFooter, AppHeader } from './components/layout'
import { AppNotifications } from './components/interface'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './utils/authorization-layer'
import { URL_DEFAULT_SITE_URL } from './utils/constants'
import asyncComponent from "./components/AsyncComponent"

const LogoutPage = asyncComponent(() => import("./pages/Auth/Logout"))
const LoginPage = asyncComponent(() => import("./pages/Auth/Login"))
const ResetPasswordPage = asyncComponent(() => import("./pages/Auth/Reset"))
const RegisterPage = asyncComponent(() => import("./pages/Auth/Register"))

const DashboardPage = asyncComponent(() => import("./pages/Dashboard"))

const OrdersPage = asyncComponent(() => import("./pages/Orders/List"))
const ViewOrderPage = asyncComponent(() => import("./pages/Orders/View"))
const CreateOrderPage = asyncComponent(() => import("./pages/Orders/Create"))
const SubscriptionsPage = asyncComponent(() => import("./pages/Subscriptions/List"))
const ProductsPage = asyncComponent(() => import("./pages/Products"))

const ViewBalancePage = asyncComponent(() => import("./pages/Balance/View"))
const AddBalancePage = asyncComponent(() => import("./pages/Balance/Add"))

const ViewAccountPage = asyncComponent(() => import("./pages/Account/View"))
const ApiKeyPage = asyncComponent(() => import("./pages/Account/Api"))
const ApiDocsPage = asyncComponent(() => import("./pages/Extras/ApiDocs"))

const HelpPage = asyncComponent(() => import("./pages/Extras/Help"))
const TermsPage = asyncComponent(() => import("./pages/Extras/Terms"))
const FaqPage = asyncComponent(() => import("./pages/Extras/Faq"))

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

          <Route path="/catalog" exact component={UserIsAuthenticated(ProductsPage)} />

          <Route path="/balance/add" exact component={UserIsAuthenticated(AddBalancePage)} />
          <Route path="/balance" exact component={UserIsAuthenticated(ViewBalancePage)} />

          <Route path="/account/api" exact component={ApiKeyPage} />
          <Route path="/account" exact component={UserIsAuthenticated(ViewAccountPage)} />

          <Route path="/support" exact component={HelpPage} />
          <Route path="/terms" exact component={TermsPage} />
          <Route path="/faq" exact component={FaqPage} />
          <Route path="/apidocs" exact component={ApiDocsPage} />

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
        <meta property="og:url" content={URL_DEFAULT_SITE_URL} />
      </Helmet>
    )
  }
}

export { AppRoutes }
