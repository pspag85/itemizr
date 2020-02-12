import React from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import Navbar from './navbar'
import NavCart from './nav-cart'
import '../css/user-bar.css'

const UserBar = withRouter(({user, location}) => {
  if(!user.id) {
    return <Redirect to='/' />
  }

  const header = location.pathname.split('/')[1]
  return (
    <div id='user-bar'>
      <div id='header-container'>
        <h2>{header}</h2>
        <NavCart />
      </div>
      <Navbar />
    </div>
  )
})

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(UserBar)
