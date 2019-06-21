import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
import BusinessName from './business-name'
import UserMenu from './user-menu'
import Lists from './lists'

const UserPage = ({user, navbar}) => {
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <LogoHeader />
      <BusinessName />
      <UserMenu />
      {navbar ? <Navbar /> : null}
    </div>
  )
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, null)(UserPage)
