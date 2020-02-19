import React, {useState} from 'react'
import RowDropDown from './row-drop-down'

const withRowOptions = (WrappedComponent, id, deleteRow) => (props) => {
  const [toggleState, setMenuState] = useState(false)
  const toggleMenu = () => setMenuState(!toggleState)

  return (
    <div className='product row'>
      <WrappedComponent {...props} />
      {toggleState && <RowDropDown id={id} deleteRow={deleteRow} />}
    </div>
  )
}

export default withRowOptions