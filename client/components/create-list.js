import React from 'react'

const CreateList = ({handleClick}) => (
  <div className='add-container nav-wdth pointer' onClick={handleClick}>
    <img className='add-btn' src='/img/add.png' />
    <h3>Create List</h3>
  </div>
)

export default CreateList
