import React, {Fragment, useState} from 'react'
import {useToggleState} from '../utility/hooks'
import EditVendor from './edit-vendor'
import RowDropDown from './row-drop-down'
import '../css/table-row.css'

const Vendor = ({id, vendor, editVendor, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()

  const columns = Object.keys(vendor)

  const renderVendor = () => (
    columns.map(column => (
      <td key={column + Math.random()}>
        {vendor[column]}
      </td>
    ))
  )

  const renderVendorMenu = () => (
    <td className='column pointer bg-white' onClick={toggleMenu}>
      <img src='/img/more-vert.png' />
    </td>
  )

  return (
    <Fragment>
      <tr className='light-font'>
        {renderVendor()}
        {renderVendorMenu()}
        {toggleState && (
          <RowDropDown
            id={id}
            editRow={editVendor}
            deleteRow={deleteRow}
          />
        )}
      </tr>
    </Fragment>
  )
}

export default Vendor
