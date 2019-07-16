import React from 'react'
import ItemCol from './item-col'

var EditItem = ({id, name, onHand, par, orderQty, deleteItem}) => (
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
    <div onClick={() => deleteItem(id)} >
      <h4>&times;</h4>
    </div>
  </div>
)

export default EditItem