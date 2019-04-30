import React from 'react'
// import '../css/item.css'

var User = function(props){
  var ownerId = 1
  var id = props.id
  var name = props.name
  var date = props.date.slice(0, 10)
  var email = props.email
  var isAdmin = props.isAdmin ? 'TRUE' : 'FALSE'
  var remove = props.remove
  return id === 1 ? (
    <div className='itemRow'>
      <div className='column'>
        {date}
      </div>
      <div className='column'>
        {name}
      </div>
      <div className='column'>
        {email}
      </div>
      <div className='column'>
        {isAdmin}
      </div>
    </div>    
  ):(
    <div className='itemRow'>
      <div className='column'>
        {date}
      </div>
      <div className='column'>
        {name}
      </div>
      <div className='column'>
        {email}
      </div>
      <div className='column'>
        {isAdmin}
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
export default User
