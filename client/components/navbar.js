import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import '../css/navbar.css'
import UserMenu from './user-menu';

const Navbar = withRouter(() => (
  <div id='navbar' className='bg-lt-blue nav-wdth'>
    <UserMenu />
    <Link to='/products'>Products</Link>
    <Link to='/vendors'>Vendors</Link>
  </div>
))

export default Navbar