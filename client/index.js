import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import history from './history'
import store, {getMe} from './store'
import Signup from './components/signup'
import Login from './components/login'
import UserPage from './components/user-page'
import Lists from './components/lists'
import Items from './components/items'

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

// We've taken a class component and wrapped it in
// `withRouter` so that it receives `history` from react-router-dom
// as a prop! We've kept it a class component because (as we'll see
// in the workshop), we want to take advantage of that `componentDidMount`
// lifecycle hook!

  render () {
    return (
      <Switch>
        <Route exact path='/items' component={Items} />
        <Route exact path='/lists' component={UserPage} />
        <Route exact path='/signup' component={Signup} />
        <Route component={Login} />
      </Switch>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
