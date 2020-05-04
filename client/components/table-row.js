import React, {useState} from 'react'
import {useToggleState} from '../utility/hooks'
import RowDropDown from './row-drop-down'
import EditDataForm from './edit-data-form'
import '../css/table-row.css'

const TableRow = ({id, rowData, model, updateData, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()
  const [editFormState, setEditFormState] = useState(false)

  const openEditDataForm = () => setEditFormState(true)
  const closeEditForm = () => {
    toggleMenu()
    setEditFormState(false)
  }

  const columns = Object.keys(rowData)
  const priceKeys = ['price', 'quantity', 'unit']

  const renderPriceColumn = (column) => (
    column === 'price' ? (
      <td className='price-column' key={column + Math.random()}>
        <p>{rowData.price}</p>
        <span className='unit-container'>
          <p>{rowData.quantity}</p>
          <p>/</p>
          <p>{rowData.unit}</p>
        </span>
      </td>
    ) : (
      null
    )
  )

  const renderCells = () => (
    columns.map(column => priceKeys.includes(column)
      ? renderPriceColumn(column)
      : (
        <td key={column + Math.random()}>
          {rowData[column]}
        </td>
      )
    )
  )

  return (
    <tr className='light-font'>
      {editFormState ? (
        <EditDataForm
          id={id}
          currentState={rowData}
          model={model}
          updateData={updateData}
          closeForm={closeEditForm}
        />
      ) : renderCells()}
      <td className='column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </td>
      {toggleState && (
        <RowDropDown id={id} editRow={openEditDataForm} deleteRow={deleteRow} />
      )}
    </tr>
  )
}

export default TableRow
