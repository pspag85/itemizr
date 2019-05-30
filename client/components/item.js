import React from 'react'
import ItemRow from './item-row'
import '../css/item.css'

var Item = props => {
  const {id, name, onHand, par, orderQty, remove} = props
  return(
    <div className='itemRow'>
      <div className='column'>
        <ItemRow input='name' name={name} id={id} />
      </div>
      <div className='column'>
        <ItemRow input='onHand' onHand={onHand} id={id} />
      </div>
      <div className='column'>
        <ItemRow input='par' par={par} id={id} />
      </div>
      <div className='column'>
        <ItemRow input='orderQty' orderQty={orderQty} id={id} />
      </div>
      <div className='column'>
        <button className='remove' onClick={() => remove(id)}> - </button>
      </div>
    </div>
  )
}
export default Item
