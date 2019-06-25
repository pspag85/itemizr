import React from 'react'

const CreateList = ({handleClick}) => (
  <div className='add-container pointer' onClick={handleClick}>
    <img className='add-btn' src='/img/add-yellow-thck.png' />
    <h3>Create List</h3>
  </div>
)

export default CreateList
