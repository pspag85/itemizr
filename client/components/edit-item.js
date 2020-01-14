import React from 'react'
import ItemInput from './item-input'

const EditItem = ({id, name, onHand, par, orderQty, deleteItem, submitItem}) => (
  <div className='item row'>
    <div className='column'>
      <ItemInput input='name' value={name} id={id} handleSubmit={submitItem}/>
    </div>
    <div className='column'>
      <ItemInput input='onHand' value={onHand} id={id} handleSubmit={submitItem}/>
    </div>
    <div className='column'>
      <ItemInput input='par' value={par} id={id} handleSubmit={submitItem}/>
    </div>
    <div className='column'>
      <ItemInput input='orderQty' value={orderQty} id={id} handleSubmit={submitItem}/>
    </div>
    <div onClick={() => deleteItem(id)} >
      <h4>&times;</h4>
    </div>
  </div>
)

export default EditItem