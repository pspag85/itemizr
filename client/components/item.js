import React from 'react'
import UpdateItem from './update-item'
import '../css/item.css'

var Item = props => {
  const {id, name, onHand, par, orderQty, remove, update} = props
  return(
    <div className='itemRow'>
      <div className='column'>
        <UpdateItem input='name' name={name} id={id} update={update} />
      </div>
      <div className='column'>
        <UpdateItem input='onHand' onHand={onHand} id={id} update={update} />
      </div>
      <div className='column'>
        <UpdateItem input='par' par={par} id={id} update={update} />
      </div>
      <div className='column'>
        <UpdateItem input='orderQty' orderQty={orderQty} id={id} update={update} />
      </div>
      <div className='column'>
        <button className='remove' onClick={() => remove(id)}> - </button>
      </div>
    </div>
  )
}
export default Item
