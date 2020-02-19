import React from 'react'

const RowDropDown = ({id, editRow, deleteRow}) => (
  <div className='row-menu bg-white box-shadow'>
    <div className='column pointer edit-btn' onClick={() => editRow(id)}>
      <img className='edit-icon' src='/img/edit.png'/>
      <h4 className='edit-txt light-font'>Edit</h4>
    </div>
    <div className='column pointer delete-list' onClick={() => deleteRow(id)}>
      <img className='delete-icon' src='/img/delete.png'/>
      <h4 className='delete-txt light-font'>Delete</h4>
    </div>
  </div>
)

export default RowDropDown
