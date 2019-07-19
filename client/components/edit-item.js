import React from 'react'
import ItemInput from './item-input'

var EditItem = ({id, name, onHand, par, orderQty, deleteItem}) => (
  <div className='item row'>
    <div className='column'>
      <ItemInput input='name' value={name} id={id} />
    </div>
    <div className='column'>
      <ItemInput input='onHand' value={onHand} id={id} />
    </div>
    <div className='column'>
      <ItemInput input='par' value={par} id={id} />
    </div>
    <div className='column'>
      <ItemInput input='orderQty' value={orderQty} id={id} />
    </div>
    <div onClick={() => deleteItem(id)} >
      <h4>&times;</h4>
    </div>
  </div>
)

export default EditItem