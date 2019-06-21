import React from 'react'

const List = ({id, date, name, lastEditedBy, deleteList}) => {
  return (
    <div className='row'>
      {date && <div className={`column`}>
        <h4 className='light-font'>{date.slice(0,10)}</h4>
      </div>}
      <div className={`column`}>
        <h4 className='light-font'>{name}</h4>
      </div>
      {lastEditedBy && <div className={`column`}>
        <h4 className='light-font'>{lastEditedBy}</h4>
      </div>}
      {deleteList && <div className={`column pointer`} onClick={() => deleteList(id)}>
        <img className='delete-icon' src='img/delete.png'/>
        <h4 className='delete-txt light-font'>Delete this list</h4>
      </div>}
    </div>
  )
}
export default List