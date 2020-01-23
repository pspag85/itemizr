import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
import TopHeader from './top-header'
import UserMenu from './user-menu'
import Lists from './lists'
import '../css/top-nav.css'

const TopNav = ({user, showNavbar}) => {
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div id='top-nav'>
      <LogoHeader />
      <TopHeader company={user.company}/>
      <UserMenu />
      {showNavbar ? <Navbar /> : null}
    </div>
  )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(TopNav)
