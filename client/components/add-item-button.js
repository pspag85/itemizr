import React, {Component} from 'react'
import '../css/add-item.css'

const AddItemButton = ({listId, openForm}) => (
  <div>
    <div id='add-item' className='add-item pointer row' onClick={openForm} >
      <img className='add-item-btn' src='/img/add.png' />
      <h5> Add new item </h5>
    </div>
  </div>
)

export default AddItemButton