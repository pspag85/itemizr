import React from 'react'
import {Link} from 'react-router-dom'

const CreateListButton = ({handleClick}) => (
  <Link to='/lists/create' className='add-container pointer box-shadow' onClick={handleClick}>
    <img className='add-btn' src='/img/add-yellow-thck.png' />
    <h3>CREATE LIST</h3>
  </Link>
)

export default CreateListButton
