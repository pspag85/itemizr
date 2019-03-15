import React from 'react'

var Item = function(props){
  var name = props.name
  var id = props.id
  var remove = props.remove
  return(
    <div className='itemRow'>
      <div className='column'>
        <h3>{name}</h3>
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
