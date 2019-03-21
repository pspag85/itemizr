import React from 'react'
import UpdateItem from './update-item'
import '../css/item.css'

var Item = function(props){
  var id = props.id
  var name = props.name
  var onHand = props.onHand
  var par = props.par
  var orderQty = props.orderQty
  var remove = props.remove
  var update = props.update
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
        <button className='remove' onClick={function(){
          return remove(id)
        }
      }> - </button>
      </div>
    </div>
  )
}
export default Item
