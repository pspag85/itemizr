import React from 'react'
import '../css/add-product.css'

const AddProductButton = ({openForm}) => (
  <div id='add-product' className='add-product flex ctr-items pointer' onClick={openForm} >
    <img className='add-product-btn' src='/img/add.png' />
    <h5> Add new product </h5>
  </div>
)

export default AddProductButton