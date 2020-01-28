import React, {Component, Fragment} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch, withRouter} from 'react-router-dom'
import history from './history'
import store, {getMe} from './store'
import Signup from './components/signup'
import Login from './components/login'
import UserBar from './components/user-bar'
import Users from './components/users'
import Lists from './components/lists'
import CreateList from './components/create-list'
import Items from './components/items'
import EditItems from './components/edit-items'
import OrderItems from './components/order-items'
import './css/app.css'

const App = withRouter(class extends Component {
  async componentDidMount() {
    const {history, location} = this.props
    const {pathname} = location
    let path = pathname === '/' ? '/lists' : pathname
    try {
      await store.dispatch(getMe())
      history.push(`${path}`)
    } catch(err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/lists/create' component={CreateList} />
          <Route exact path='/lists/:listId' component={Items} />/>
          <Route exact path='/lists/:listId/edit' component={EditItems} />
          <Route exact path='/lists/:listId/order' component={OrderItems} />
          <Route exact path='/lists' component={Lists} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/signup' component={Signup} />
          <Route component={Login} />
        </Switch>
      </Fragment>
    )
  }
})

export default hot(module)(App)