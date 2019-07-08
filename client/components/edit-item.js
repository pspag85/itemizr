import React from 'react'
import ItemCol from './item-col'

var EditItem = ({id, name, onHand, par, orderQty, deleteItem}) => (
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
      <ItemCol input='orderQty' par={orderQty} id={id} />
    </div>
    <div onClick={() => deleteItem(id)} >
      <h4>&times;</h4>
    </div>
  </div>
)

export default EditItem
