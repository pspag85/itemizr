import React from 'react'

const ItemForm = function(props){
  return(
      <div id='items'>
        <form id='add_item' onSubmit={props.handleSubmit}>
          <label htmlFor='name'> name </label>
          <input type='text' name='name' value={props.name} onChange={props.handleChange}/>
          <label htmlFor='onHand'> on hand </label>
          <input type='text' name='onHand' value={props.onHand} onChange={props.handleChange}/>
          <label htmlFor='par'> par </label>
          <input type='text' name='par' value={props.par} onChange={props.handleChange}/>
          <label htmlFor='orderQty'> order quantity </label>
          <input type='text' name='orderQty' value={props.orderQty} onChange={props.handleChange}/>
          <button type='submit'> + </button>
        </form>
      </div>
  )
}

export default ItemForm
