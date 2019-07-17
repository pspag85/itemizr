import React from 'react'
import InputCheckbox from './input-checkbox'

const Item = ({id, name, onHand, par, orderQty, orderPage, selectItem}) => (
  <div className='item row'>
    {orderPage && <InputCheckbox handleChange={evt => selectItem(id, evt)}/>}
    <div className='column'>
      <h5>{name}</h5>
    </div>
    <div className='column'>
      <h5>{onHand}</h5>
    </div>
    <div className='column'>
      <h5>{par}</h5>
    </div>
    <div className='column'>
      <h5>{orderQty}</h5>
    </div>
  </div>
)

export default Item