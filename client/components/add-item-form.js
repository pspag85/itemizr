import React from 'react'

const AddItemForm = ({handleChange, handleSubmit, item}) => {
  const {name, onHand, par, orderQty} = item
  return(
      <div className='col-header row'>
        <form id='add-item-form' onSubmit={handleSubmit}>
          <input type='text' name='name' value={name} onChange={handleChange}/>
          <input type='text' name='onHand' value={onHand} onChange={handleChange}/>
          <input type='text' name='par' value={par} onChange={handleChange}/>
          <input type='text' name='orderQty' value={orderQty} onChange={handleChange}/>
          <button type='submit'> + </button>
        </form>
      </div>
  )
}

export default AddItemForm
