import React from 'react'

const RowDropDown = ({id, deleteRow}) => (
  <div className='row-menu bg-white box-shadow'>
    {deleteRow && <div className={`column pointer delete-list`} onClick={() => deleteRow(id)}>
      <img className='delete-icon' src='/img/delete.png'/>
      <h4 className='delete-txt light-font'>Delete</h4>
    </div>}
  </div>
)

export default RowDropDown