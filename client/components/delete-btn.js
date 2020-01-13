import React from 'react'
import ItemCol from './item-col'

const DeleteButton = ({delete}) => (
  <div className='delete-btn'>
    <button className='delete' onClick={() => delete(id)}> - </button>
  </div>
)

export default DeleteButton