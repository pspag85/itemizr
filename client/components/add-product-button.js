import React, {Component} from 'react'
import '../css/add-product.css'

const AddProductButton = ({openProductForm}) => (
  <div>
    <div id='add-product' className='add-product flex ctr-items pointer' onClick={openProductForm} >
      <img className='add-product-btn' src='/img/add.png' />
      <h5> Add new product </h5>
    </div>
  </div>
)

export default AddProductButton