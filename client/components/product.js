import React, {useState} from 'react'
import RowDropDown from './row-drop-down'

const Product = ({id, name, onHand, par, orderQty, deleteRow}) => {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = () => setMenuState(!menuState)
  return (
    <div className='product row'>
      <div className='column'>
        <h5>{name || ''}</h5>
      </div>
      <div className='column'>
        <h5>{onHand || ''}</h5>
      </div>
      <div className='column'>
        <h5>{par || ''}</h5>
      </div>
      <div className='column'>
        <h5>{orderQty || ''}</h5>
      </div>
      <div className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </div>
      {menuState && <RowDropDown id={id} deleteRow={deleteRow} />}
    </div>
  )
}

export default Product