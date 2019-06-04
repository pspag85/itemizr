import React from 'react'
import '../css/logo-header.css'
const itemizrLogoImg = 'img/itemizr-logo-text.png'

const LogoHeader = () => (
  <div id='logo-header' className='bg-purple nav-wdth top-ht inline'>
    <img src={itemizrLogoImg} />
  </div>
)

export default LogoHeader