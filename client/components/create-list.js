import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLists, addList, saveItems} from '../store'
import UserPage from './user-page'
import '../css/create-list.css'

const CreateList = ({loadLists, lists, createList, saveChanges, history}) => {

  const [listName, setListName] = useState('')  

  useEffect(() => {
    loadLists()
  }, [loadLists])

  const listId = !lists[0] ? 1 : lists[0].id + 1

  const handleChange = evt => {
    const {name, value} = evt.target
    setListName(value)
  }

  const handleClick = () => {
    createList(listName)
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
  createList: name => dispatch(addList(name)),
  saveChanges: (listId, items) => dispatch(saveItems(listId, items))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)