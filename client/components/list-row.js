import React, {useState} from 'react'
import {useToggleState} from '../utility/hooks'
import RowDropDown from './row-drop-down'
import EditDataForm from './edit-data-form'

const ListRow = ({id, rowData, model, updateData, editRow, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()
  const [editFormState, setEditFormState] = useState(false)
  const rowValues = Object.values(rowData)

  const openEditForm = () => setEditFormState(true)
  const closeEditForm = () => {
    toggleMenu()
    setEditFormState(false)
  }

  return (
    <div className='product row'>
      {editFormState ? (
        <EditDataForm
          initialState={rowData}
          id={id}
          model={model}
          updateData={updateData}
          closeForm={closeEditForm}
        />
      ) : rowValues.map(columnValue => (
        <div key={id + Math.random()}
          className='column'>
          <h5>{columnValue}</h5>
        </div>
      ))}
      <div className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </div>
      {toggleState && <RowDropDown id={id} editRow={openEditForm} deleteRow={deleteRow} />}
    </div>
  )
}

export default ListRow
