import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
// Login from './components/login'
import Lists from './components/lists'
import Items from './components/items'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/items' component={Items} />
        <Route exact path='/lists' component={Lists} />
        {// <Route component={Login} />
      }
      </Switch>
    );
  }
}
