import React from 'react'
import {useToggleState} from '../utility/hooks'
import RowDropDown from './row-drop-down'

const ListRow = ({rowData, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()
  return (
    <div className='product row'>
      {rowData.map(columnData => <div className='column'>
          <h5>{columnData}</h5>
        </div>
      )}
      <div className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </div>
      {toggleState && <RowDropDown id={id} deleteRow={deleteRow} />}
    </div>
  )
}

export default ListRow
