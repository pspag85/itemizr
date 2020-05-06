import React, {Fragment, useState} from 'react'
import {useToggleState} from '../utility/hooks'
import DataCells from './data-cells'
import OverflowIcon from './overflow-icon';
import OverflowMenu from './overflow-menu'
import EditProduct from './edit-product'
import EditButton from './edit-button'
import '../css/table-row.css'

const Product = ({id, productData, editProduct, deleteProduct}) => {
  const {toggleState, toggleMenu} = useToggleState()

  const renderPrice = (key) => (
    key === 'price' ? (
      <div className='price-column'>
        <p>$ {productData.price}</p>
        <span className='unit-container'>
          <p>{productData.quantity}</p>
          <p>/</p>
          <p>{productData.unit}</p>
        </span>
      </div>
    ) : (
      null
    )
  )

  const priceKeys = ['price', 'quantity', 'unit']
  const productKeys = Object.keys(productData)
  const formattedProductData = productKeys.map(key => (
      priceKeys.includes(key) ? renderPrice(key) : productData[key]
    )
  )

  return (
    <Fragment>
      <tr className='light-font'>
        <DataCells data={formattedProductData} />
        <OverflowIcon toggleMenu={toggleMenu}/>
        {toggleState && (
          <OverflowMenu
            editButton={<EditButton handleClick={() => editProduct(id)} />}
            deleteRow={() => deleteProduct(id)}
          />
        )}
      </tr>
    </Fragment>
  )
}

export default Product
