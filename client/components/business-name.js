import React from 'react'
import {Link} from 'react-router-dom'
import '../css/business-name.css'

const BusinessName = ({company}) => (
  <div id='business-name' className='bg-prpl top-ht row'>
    <h2>{company}</h2>
  </div>
)

export default BusinessName