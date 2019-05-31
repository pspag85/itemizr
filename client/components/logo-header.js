import React from 'react'
import '../css/logo-header.css'
const itemizrLogoImg = 'img/itemizr-logo.png'

const LogoHeader = () => (
  <div id='logo-header' className='bg-purple nav-wdth'>
    <img src={itemizrLogoImg} />
  </div>
)

export default LogoHeader