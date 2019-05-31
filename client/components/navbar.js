import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => (
  <div id='navbar' className='bg-purple nav-wdth'>
    <Link to='/lists'>My Lists</Link>    
    <Link to='/users'>Admin Settings</Link>
  </div>
)

export default Navbar