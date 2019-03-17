import React from 'react'
import UpdateName from './update-name'

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
        <UpdateName name={name} id={id} update={update} />
      </div>
      <div className='column'>
        <h3>{onHand}</h3>
      </div>
      <div className='column'>
        <h3>{par}</h3>
      </div>
      <div className='column'>
        <h3>{orderQty}</h3>
      </div>
      <div className='column'>
        <button className='remove' onClick={function(){
          return remove(id)
        }
      }> -delete </button>
      </div>
    </div>
  )
}
export default Item
