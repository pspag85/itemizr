import React from 'react'

const List = props => {
  const {id, date, handleClick, deleteList, currentListId} = props
  return id === currentListId ? (
    <div id='current-row' className='list-row' onClick={handleClick}>
      <div className='column'>
        <h4>{date.slice(0,10)}</h4>
      </div>
    </div>
  ):(
    <div className='list-row'>
      <div className='column'>
        <h4>{date.slice(0,10)}</h4>
      </div>
      <div className='column'>
        <button className='remove' onClick={() => deleteList(id)}> - </button>
      </div>
    </div>
  )
}
export default List
