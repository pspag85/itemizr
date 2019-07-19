import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLists, addList, addListName, saveItems} from '../store'
import UserPage from './user-page'
import '../css/create-list.css'

const CreateList = ({loadLists, lists, initializeList, createList, saveChanges, history}) => {

  const [listName, setListName] = useState('')  

  useEffect(() => {
    initializeList()
  }, [initializeList])

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
    saveChanges(listId, [{id: 1, listId}])
    history.push(`/lists/${listId}/edit`)
  }
   
  return (
    <div>
      <UserPage />
      <div className='margin-40'>
        <div className='header row font-20'>
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
          <Link to='/lists' className='cancel-btn pointer light-font'>CANCEL</Link>
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
  saveChanges: (listId, items) => dispatch(saveItems(listId, items))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)