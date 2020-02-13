import React from 'react'
import InputCheckbox from './input-checkbox'

const Vendor = ({id, name, email, phone}) => {
  return (
    <div className='product row'>
      <div className='column'>
        <h5>{name || ''}</h5>
      </div>
      <div className='column'>
        <h5>{email || ''}</h5>
      </div>
      <div className='column'>
        <h5>{phone || ''}</h5>
      </div>
    </div>
  )
}

export default Vendor