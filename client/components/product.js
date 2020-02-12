import React from 'react'
import InputCheckbox from './input-checkbox'

const Product = ({id, name, onHand, par, orderQty, orderPage, selectProduct, selected, allSelected}) => {
  return (
    <div className='product row'>
      {orderPage && <InputCheckbox checked={selected || allSelected} handleChange={evt => selectProduct(id, evt)}/>}
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
    </div>
  )
}

export default Product