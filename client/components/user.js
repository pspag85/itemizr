import React from 'react'
//import '../css/item.css'

var User = function(props){
  var name = props.name
  var date = props.date
  var email = props.email
  var remove = props.remove
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
