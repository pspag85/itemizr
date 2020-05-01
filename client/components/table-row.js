import React, {useState} from 'react'
import {useToggleState} from '../utility/hooks'
import RowDropDown from './row-drop-down'
import EditDataForm from './edit-data-form'

const TableRow = ({id, rowData, model, updateData, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()
  const [editFormState, setEditFormState] = useState(false)

  const openEditForm = () => setEditFormState(true)
  const closeEditForm = () => {
    toggleMenu()
    setEditFormState(false)
  }

  const rowValues = Object.values(rowData)

  return (
    <tr>
      {editFormState ? (
        <EditDataForm
          id={id}
          currentState={rowData}
          model={model}
          updateData={updateData}
          closeForm={closeEditForm}
        />
      ) : rowValues.map(columnValue => (
        <td key={columnValue + Math.random()}
          className='column'>
          <h5>{columnValue}</h5>
        </td>
      ))}
      <td className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </td>
      {toggleState && <RowDropDown id={rowValues.id} editRow={openEditForm} deleteRow={deleteRow} />}
    </tr>
  )
}

export default TableRow
