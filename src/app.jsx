import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import history from './history'
import {hot} from 'react-hot-loader'
import store, {getMe} from './store'
import Navbar from './components/navbar';
import Routes from './routes';
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
        <Navbar />
        <Routes />
      </Fragment>
    )
  }
})

export default hot(module)(App)