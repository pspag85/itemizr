import React, {useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import ListOptionMenu from './list-option-menu'

const List = ({id, date, name, lastEditedBy, deleteList}) => {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = () => setMenuState(!menuState)

  return id && (
    <Fragment>
      <div className='row bg-white'>
        <Link to={`/lists/${id}`} className='list-link'>
          {date && <div className='column'>
            <h4 className='light-font'>{date.slice(0,10)}</h4>
          </div>}
          <div className='column'>
            <h4 className='light-font'>{name}</h4>
          </div>
          {lastEditedBy && <div className='column'>
            <h4 className='light-font'>{lastEditedBy}</h4>
          </div>}
        </Link>
        <div className='list-menu-container column pointer bg-white' onClick={toggleMenu}>
          <img src='/img/more-vert.png' />
        </div>
      </div>
      {menuState && <ListOptionMenu deleteList={deleteList} id={id}/>}
    </Fragment>
  )
}

export default List