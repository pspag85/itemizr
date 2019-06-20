import React from 'react'
import ItemCol from './item-col'

var Item = ({id, name, onHand, par, orderQty, remove}) => (
  <div className='item row'>
    <div className='column'>
      <ItemCol input='name' name={name} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='onHand' onHand={onHand} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='par' par={par} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='orderQty' orderQty={orderQty} id={id} />
    </div>
  </div>
)

export default Item
