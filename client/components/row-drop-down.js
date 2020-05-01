import React from 'react'

const RowDropDown = ({id, editRow, deleteRow}) => (
  <td className='row-menu bg-white box-shadow'>
    <div onClick={() => editRow(id)}>
      <img src='/img/edit.png'/>
      <h4>Edit</h4>
    </div>
    <div onClick={() => deleteRow(id)}>
      <img src='/img/delete.png'/>
      <h4 className='delete-txt'>Delete</h4>
    </div>
  </td>
)

export default RowDropDown
