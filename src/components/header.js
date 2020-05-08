import React from 'react'
import '../css/header.css'

const Header = ({title, action}) => {
  return (
    <div className='header flex ctr-items space-between'>
      <h2>{title}</h2>
      <span>{action}</span>
    </div>
  )
}

export default Header
