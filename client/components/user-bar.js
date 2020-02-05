import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
import NavCart from './nav-cart'
import '../css/user-bar.css'

const UserBar = ({user}) => {
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div id='user-bar' className='bg-prpl'>
      <NavCart />
      <Navbar />
    </div>
  )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(UserBar)
