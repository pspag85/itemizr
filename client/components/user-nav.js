import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
import TopHeader from './top-header'
import UserMenu from './user-menu'
import Lists from './lists'
import '../css/user-nav.css'

const UserNav = ({user, showSideNav}) => {
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div id='user-nav'>
      <LogoHeader />
      <TopHeader company={user.company}/>
      <UserMenu />
      {showSideNav ? <Navbar /> : null}
    </div>
  )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(UserNav)