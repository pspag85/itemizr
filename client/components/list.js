import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ListOptionMenu from './list-option-menu'

const List = ({id, date, name, lastEditedBy, deleteList}) => {
  const [menuState, setMenuState] = useState('closed')

  const openMenu = () => setMenuState('open')
  const closeMenu = () => setMenuState('closed')
  return (
    <div className='row bg-white'>
      <Link to={`/lists/${id}/order`} className='list-link'>
        {date && <div className='column'>
          <h4 className='light-font'>{date.slice(0,10)}</h4>
        </div>}
        <div className='column'>
          <h4 className='light-font'>{name}</h4>
        </div>
        {lastEditedBy && <div className='column'>
          <h4 className='light-font'>{lastEditedBy}</h4>
        </div>}
        {deleteList && <div className='column pointer' onClick={() => deleteList(id)}>
          <img className='delete-icon' src='/img/delete.png'/>
          <h4 className='delete-txt light-font'>Delete this list</h4>
        </div>}
      </Link>
      <div className='list-menu-container column pointer bg-white' onClick={openMenu}>
        <img src='/img/more-vert.png' />
        {menuState === 'open' && <div>menu</div>}
      </div>
    </div>
  )
}

export default List