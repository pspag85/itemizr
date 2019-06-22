import React from 'react'
import {Link} from 'react-router-dom'

const List = ({id, date, name, lastEditedBy, deleteList}) => (
  <Link to={`/lists/${id}/order`}>
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
        <img className='delete-icon' src='/img/delete.png'/>
        <h4 className='delete-txt light-font'>Delete this list</h4>
      </div>}
    </div>
  </Link>
)

export default List