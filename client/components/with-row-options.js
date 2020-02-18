import React, {useState} from 'react'
import RowDropDown from './row-drop-down'

const withRowOptions = (WrappedComponent, id, deleteRow) => (props) => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => setMenuState(!menuState)

  return (
    <div className='product row'>
      <WrappedComponent {...props} />
      {menuState && <RowDropDown id={id} deleteRow={deleteRow} />}
    </div>
  )
}

export default withRowOptions