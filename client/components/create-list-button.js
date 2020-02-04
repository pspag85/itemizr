import React from 'react'
import {Link} from 'react-router-dom'

const CreateListButton = ({supplierId}) => (
  <Link to={`/lists/create/${supplierId}`} className='add-container pointer box-shadow'>
    <img className='add-btn' src='/img/add-yellow-thck.png' />
    <h3>CREATE LIST</h3>
  </Link>
)

export default CreateListButton
