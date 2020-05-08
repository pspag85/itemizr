import React from 'react'

const EditButton = ({handleClick}) => (
  <button className='custom-btn' onClick={handleClick}>
    <img src='/img/edit.png'/>
    <h4>Edit</h4>
  </button>
)

export default EditButton
