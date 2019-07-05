import React from 'react'

const ListOptionMenu = ({deleteList, id}) => (
  <div>
    {deleteList && <div className={`column pointer delete-list`} onClick={() => deleteList(id)}>
      <img className='delete-icon' src='/img/delete.png'/>
      <h4 className='delete-txt light-font'>Delete this list</h4>
    </div>}
  </div>
)

export default ListOptionMenu