import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
import BusinessName from './business-name'
import UserDropdown from './user-dropdown'
import Lists from './lists'

const UserPage = props => {
  const {user, handleClick} = props
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <LogoHeader />
      <BusinessName />
      <UserDropdown />
      <Navbar />
      <Lists user={user}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserPage)
