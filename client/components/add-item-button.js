import React, {Component} from 'react'
import '../css/add-item.css'

const AddItemButton = ({listId, addNewItem}) => (
  <div>
    <div id='add-item' className='add-item flex ctr-items pointer hz-pdg-40' onClick={addNewItem} >
      <img className='add-item-btn' src='/img/add.png' />
      <h5> Add new item </h5>
    </div>
  </div>
)

export default AddItemButton