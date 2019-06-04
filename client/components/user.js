import React from 'react'

const User = props => {
  const ownerId = 1
  const {name, id, email, remove} = props
  const date = props.date.slice(0, 10)
  const isAdmin = props.isAdmin ? 'TRUE' : 'FALSE'
  return id === 1 ? (
    <div className='item-row'>
      <div className='column cell'>
        {date}
      </div>
      <div className='column cell'>
        {name}
      </div>
      <div className='column cell'>
        {email}
      </div>
      <div className='column cell'>
        {isAdmin}
      </div>
    </div>    
  ):(
    <div className='item-row'>
      <div className='column cell'>
        {date}
      </div>
      <div className='column cell'>
        {name}
      </div>
      <div className='column cell'>
        {email}
      </div>
      <div className='column cell'>
        {isAdmin}
      </div>
      <div className='column cell'>
        <button className='remove' onClick={() => remove(id)}> - </button>
      </div>
    </div>
  )
}
export default User
