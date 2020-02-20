import React, {useState} from 'react'
import {useToggleState} from '../utility/hooks'
import RowDropDown from './row-drop-down'
import EditDataForm from './edit-data-form'

const ListRow = ({id, rowData, model, updateData, editRow, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()
  const [editFormState, setEditFormState] = useState(false)

  const openEditForm = () => setEditFormState(true)
  const closeEditForm = () => {
    toggleMenu()
    setEditFormState(false)
  }

  const rowValues = Object.values(rowData)

  return (
    <div className='product row'>
      {editFormState ? (
        <EditDataForm
          id={id}
          currentState={rowData}
          model={model}
          updateData={updateData}
          closeForm={closeEditForm}
        />
      ) : rowValues.map(columnValue => (
        <div key={columnValue + Math.random()}
          className='column'>
          <h5>{columnValue}</h5>
        </div>
      ))}
      <div className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </div>
      {toggleState && <RowDropDown id={rowValues.id} editRow={openEditForm} deleteRow={deleteRow} />}
    </div>
  )
}

export default ListRow
