import React, {useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import ListOptionMenu from './list-option-menu'
import Items from './items';

const List = ({id, name, deleteList}) => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => setMenuState(!menuState)

  const [listState, setListState] = useState(false)
  const toggleList = () => setListState(!listState)

  return id && (
    <Fragment>
      <div className='row bg-white box-shadow'>
        <div onClick={toggleList} className='list-link'>
          <div className='column'>
            <h4 className='light-font'>{name}</h4>
          </div>
        </div>
        <div className='list-menu-container column pointer bg-white' onClick={toggleMenu}>
          <img src='/img/more-vert.png' />
        </div>
      </div>
      {menuState && <ListOptionMenu deleteList={deleteList} id={id}/>}
      {listState && <Items listId={id} />}
    </Fragment>
  )
}

export default List