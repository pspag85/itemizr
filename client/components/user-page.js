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
      <BusinessName company={user.company}/>
      <UserMenu />
      {navbar ? <Navbar /> : null}
    </div>
  )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(UserPage)
