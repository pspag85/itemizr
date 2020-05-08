import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'

const PublicRoutes = () => (
  <Switch>
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Route component={Login} />
  </Switch>
)

export default PublicRoutes