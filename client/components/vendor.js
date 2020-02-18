import React, {useState} from 'react'
import {useMenuState} from '../utility/hooks'
import RowDropDown from './row-drop-down';

const Vendor = ({id, name, email, phone, deleteRow}) => {
  const {menuState, toggleMenu} = useMenuState()
  return (
    <div className='product row'>
      <div className='column'>
        <h5>{name}</h5>
      </div>
      <div className='column'>
        <h5>{email}</h5>
      </div>
      <div className='column'>
        <h5>{phone}</h5>
      </div>
      <div className='row-menu-container column pointer bg-white' onClick={toggleMenu}>
        <img src='/img/more-vert.png' />
      </div>
      {menuState && <RowDropDown id={id} deleteRow={deleteRow} />}
    </div>
  )
}

export default Vendor
