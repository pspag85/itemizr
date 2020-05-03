import React from 'react'
import ProductCol from './product-col'

const DeleteButton = ({delete}) => (
  <div className='delete-btn'>
    <button className='delete' onClick={() => delete(id)}> - </button>
  </div>
)

export default DeleteButton