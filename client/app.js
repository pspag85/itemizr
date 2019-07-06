import React, {Component, Fragment} from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch, withRouter} from 'react-router-dom'
import history from './history'
import store, {getMe} from './store'
import Signup from './components/signup'
import Login from './components/login'
import UserPage from './components/user-page'
import Users from './components/users'
import Lists from './components/lists'
import EditLists from './components/edit-lists'
import Items from './components/items'
import EditItems from './components/edit-items'
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
          <Route exact path='/lists/:listId' component={Items} />/>
          <Route exact path='/lists/edit' component={EditLists} />
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