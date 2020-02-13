import React, {Component} from 'react'
import '../css/add-product.css'

const AddVendorButton = ({addVendor}) => (
  <div>
    <div id='add-product' className='add-product flex ctr-items justify-ctr pointer' onClick={addVendor} >
      <img className='add-product-btn' src='/img/add.png' />
      <h5> Add new vendor </h5>
    </div>
  </div>
)

export default AddVendorButton