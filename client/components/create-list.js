import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLists, addList, addListName, removeList, saveItems} from '../store'
import UserNav from './user-nav'
import '../css/create-list.css'

const CreateList = ({loadLists, lists, initializeList, createList, deleteList, saveChanges, history}) => {

  const [listName, setListName] = useState('')

  useEffect(() => {
    initializeList()
  }, [])

  useEffect(() => {
    loadLists()
  }, [loadLists])

  const handleChange = evt => {
    const {name, value} = evt.target
    setListName(value)
  }

  const handleClick = () => {
    const listId = lists[0].id
    createList(listId, listName)
    history.push(`/lists/${listId}/edit`)
  }

  const cancel = () => {
    const listId = lists[0].id
    deleteList(listId)
    history.push('/lists')
  }

  return (
    <div>
      <UserNav />
      <div className='margin-40'>
        <div className='header font-20'>
          <h3>CREATE LIST</h3>
        </div>
        <div className='bg-white box-shadow'>
          <form className='list-form' onSubmit={handleClick}>
            <label className='secondary-txt'>LIST NAME</label>
            <input
              className='bg-white box-shadow font-20'
              type='text'
              value={listName}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='save'>
          <button className='action-btn white bg-blue pointer' onClick={handleClick}>CREATE</button>
          <button className='cancel-btn pointer light-font' onClick={cancel}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({lists}) => ({lists})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  initializeList: () => dispatch(addList()),
  createList: (id, name) => dispatch(addListName(id, name)),
  deleteList: id => dispatch(removeList(id)),
  saveChanges: (listId, items, isInit) => dispatch(saveItems(listId, items, isInit))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)