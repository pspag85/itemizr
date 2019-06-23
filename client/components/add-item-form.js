import React from 'react'

const AddItemForm = ({handleChange, handleSubmit, item}) => {
  const {name, onHand, par, orderQty} = item
  return(
      <div className='col-header row'>
        <form id='add-item-form' onSubmit={handleSubmit}>
          <label htmlFor='name'> name </label>
          <input type='text' name='name' value={name} onChange={handleChange}/>
          <label htmlFor='onHand'> on hand </label>
          <input type='text' name='onHand' value={onHand} onChange={handleChange}/>
          <label htmlFor='par'> par </label>
          <input type='text' name='par' value={par} onChange={handleChange}/>
          <label htmlFor='orderQty'> order quantity </label>
          <input type='text' name='orderQty' value={orderQty} onChange={handleChange}/>
          <button type='submit'> + </button>
        </form>
      </div>
  )
}

export default AddItemForm
