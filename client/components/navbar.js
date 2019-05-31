import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id='navbar'>
    <Link to='/lists'>My Lists</Link>    
    <Link to='/users'>Admin Settings</Link>
  </div>
)

export default Navbar