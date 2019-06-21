import React from 'react'

const List = ({id, date, name, handleClick, deleteList, currentListId}) => {
  return id === currentListId ? (
    <div id='current-row' className='row' onClick={handleClick}>
      <div className='column three'>
        <h4>{date.slice(0,10)}</h4>
      </div>
      <div className='column three'>
        <h4>{name}</h4>
      </div>
    </div>
  ):(
    <div className='row'>
      <div className='column three'>
        <h4>{date.slice(0,10)}</h4>
      </div>
      <div className='column three'>
        <button className='remove' onClick={() => deleteList(id)}> - </button>
      </div>
      <div className='column three'>
        <h4>{name}</h4>
      </div>
    </div>
  )
}
export default List