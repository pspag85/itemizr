import React from 'react'
import {Link} from 'react-router-dom'
import '../css/top-header.css'

const TopHeader = ({company}) => (
  <div id='top-header'>
    <h2>{company}</h2>
  </div>
)

export default TopHeader