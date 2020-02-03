import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = withRouter(() => (
  <div id='navbar' className='bg-lt-blue nav-wdth'>
    <Link to='/lists'>Inventory</Link>
    <Link to='/suppliers'>Suppliers</Link>
    <Link to='/users'>Admin Settings</Link>
  </div>
))

export default Navbar