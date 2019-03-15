import React from 'react'

const ItemForm = function(props){
  return(
      <div id='items'>
        <form id='add_item' onSubmit={props.handleSubmit}>
          <input type='text' name='item' value={props.item} onChange={props.handleChange}/>
          <button type='submit'> + </button>
        </form>
      </div>
  )
}

export default ItemForm
