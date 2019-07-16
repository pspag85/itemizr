import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addList} from '../store'
import UserPage from './user-page'
import '../css/create-list.css'

const CreateList = ({createList, history}) => {

  const [listName, setListName] = useState('')  

  const handleChange = evt => {
    const {name, value} = evt.target
    setListName(value)
  }

  const handleClick = () => {
    createList(listName)
    history.push('/lists')
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  createList: name => dispatch(addList(name))
})

export default connect(null, mapDispatchToProps)(CreateList)