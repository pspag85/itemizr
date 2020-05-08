import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Products from './pages/products'
import Vendors from './pages/vendors'
import Signup from './pages/signup'
import Login from './pages/login'
import NotFound from './pages/not-found'

const Routes = () => (
  <div className='page-pdg'>
    <Switch>
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/:vendorId' component={Products} />
      <Route exact path='/vendors' component={Vendors} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Routes