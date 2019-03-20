import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main'
import {Router} from 'react-router-dom'
import history from './history'


ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('app')
)
