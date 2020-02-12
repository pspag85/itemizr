import React, {Component, Fragment} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch, withRouter} from 'react-router-dom'
import history from './history'
import store, {getMe} from './store'
import Signup from './components/signup'
import Login from './components/login'
import UserBar from './components/user-bar'
import Users from './components/users'
import Vendor from './components/vendor'
import Vendors from './components/vendors';
import AddVendor from './components/add-vendor';
import Products from './components/products'
import EditProducts from './components/edit-products'
import './css/app.css'

const App = withRouter(class extends Component {
  async componentDidMount() {
    const {history, location} = this.props
    const {pathname} = location
    let path = pathname === '/' ? '/products' : pathname
    try {
      await store.dispatch(getMe())
      history.push(path)
    } catch(err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/users' component={Users} />
          <Route exact path='/vendors/add' component={AddVendor} />
          <Route exact path='/vendors/:id' component={Vendor} />
          <Route exact path='/vendors' component={Vendors} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/signup' component={Signup} />
          <Route component={Login} />
        </Switch>
      </Fragment>
    )
  }
})

export default hot(module)(App)