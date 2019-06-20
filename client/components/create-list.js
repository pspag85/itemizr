import React from 'react'
import '../css/create-list.css'

const CreateList = ({handleClick}) => (
  <div id='create-list' className='nav-wdth'>
    <img className='add-btn' src='/img/add.png' onClick={handleClick} />
    <h3>Create List</h3>
  </div>
)

export default CreateList
