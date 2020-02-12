import React, {useState, Fragment} from 'react'
import {Link} from 'react-router-dom'

const VendorLink = ({id, name, contact}) => {
  return id && (
    <div className='row bg-white box-shadow'>
      <Link to={`vendors/${id}`} className='list-link'>
        <div className='column'>
          <h4>{name}</h4>
        </div>
        <div className='column'>
          <h4>{contact}</h4>
        </div>
      </Link>
    </div>
  )
}

export default VendorLink