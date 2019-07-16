import React from 'react'
import ItemCol from './item-col'

var Item = ({id, name, onHand, par, orderQty}) => (
  <div className='item row'>
    <div className='column'>
      <ItemCol input='name' value={name} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='onHand' value={onHand} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='par' value={par} id={id} />
    </div>
    <div className='column'>
      <ItemCol input='orderQty' value={orderQty} id={id} />
    </div>
  </div>
)

export default Item