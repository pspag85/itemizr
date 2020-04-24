import React, {Component, Fragment, useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import history from './history'
import {hot} from 'react-hot-loader'
import store, {getMe} from './store'
import Signup from './components/signup'
import Login from './components/login'
import Vendors from './components/vendors'
import Products from './components/products'
import './css/app.css'

const App = withRouter(class extends Component {
  async componentDidMount() {
    const {history, location} = this.props
    const {pathname} = location
    let path = pathname === '/' ? '/products' : pathname
    try {
      const user = await store.dispatch(getMe())
      path = !user ? '/login' : path
      history.push(`${path}`)
    } catch(err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/vendors' component={Vendors} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Products} />
        </Switch>
      </Fragment>
    );
  }
});

export default hot(module)(App)