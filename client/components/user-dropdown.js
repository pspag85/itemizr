import React from 'react'
import Logout from './logout'

const UserDropdown = props => (
  <div>
    <Logout handleClick={props.handleClick}/>
  </div>
)

export default UserDropdown
