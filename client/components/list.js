import React from 'react'

const List = ({id, date, handleClick, deleteList, currentListId}) => {
  return id === currentListId ? (
    <div id='current-row' className='row' onClick={handleClick}>
      <div className='column'>
        <h4>{date.slice(0,10)}</h4>
      </div>
    </div>
  ):(
    <div className='row'>
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