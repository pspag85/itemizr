import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Products from './views/products'
import Vendors from './views/vendors'
import Signup from './views/signup'
import Login from './views/login'
import NotFound from './views/not-found'

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path='/products' component={Products} />
      <Route exact path='/vendors' component={Vendors} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Routes