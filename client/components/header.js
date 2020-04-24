import React from 'react'
import '../css/header.css'

const Header = () => {
  const header = location.pathname.split('/')[1]
  return (
    <div className='header'>
      <h2>{header}</h2>
    </div>
  )
}

export default Header
