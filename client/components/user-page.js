import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'
import UserDropdown from './user-dropdown'
import Lists from './lists'

const UserPage = props => {
  const {user, handleClick} = props
  if(!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div>
        <h1>Welcome back {user.email}!</h1>
        <Link to='/users'>Admin Settings</Link>
      </div>
      <div>
        <UserDropdown handleClick={handleClick} />
        <Lists user={user}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick () {
      try{
        await dispatch(logout())
        ownProps.history.push('/')
      } catch(err) {
        console.error(err)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
