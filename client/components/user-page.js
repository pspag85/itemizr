import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import LogoHeader from './logo-header'
import Navbar from './navbar'
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
      <div>
        <h1>Welcome back {user.email}!</h1>
      </div>
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
