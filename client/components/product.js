import React, {Fragment, useState} from 'react'
import {useToggleState} from '../utility/hooks'
import EditProduct from './edit-product'
import RowDropDown from './row-drop-down'
import '../css/table-row.css'

const Product = ({id, product, editProduct, deleteRow}) => {
  const {toggleState, toggleMenu} = useToggleState()

  const columns = Object.keys(product)
  const priceKeys = ['price', 'quantity', 'unit']

  const renderPrice = (column) => (
    column === 'price' ? (
      <td className='price-column' key={column + Math.random()}>
        <p>{product.price}</p>
        <span className='unit-container'>
          <p>{product.quantity}</p>
          <p>/</p>
          <p>{product.unit}</p>
        </span>
      </td>
    ) : (
      null
    )
  )

  const renderProduct = () => (
    columns.map(column => priceKeys.includes(column)
      ? renderPrice(column)
      : (
        <td key={column + Math.random()}>
          {product[column]}
        </td>
      )
    )
  )

  const renderProductMenu = () => (
    <td className='column pointer bg-white' onClick={toggleMenu}>
      <img src='/img/more-vert.png' />
    </td>
  )

  return (
    <Fragment>
      <tr className='light-font'>
        {renderProduct()}
        {renderProductMenu()}
        {toggleState && (
          <RowDropDown
            id={id}
            editRow={editProduct}
            deleteRow={deleteRow}
          />
        )}
      </tr>
    </Fragment>
  )
}

export default Product
