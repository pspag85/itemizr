import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {getLists, addList, removeList, saveItems} from '../store'
import UserBar from './user-bar'
import '../css/create-list.css'

const CreateList = ({saveChanges, history}) => {

  const [listName, setListName] = useState('')

  const handleChange = evt => {
    const {name, value} = evt.target
    setListName(value)
  }

  const addNewList = async evt => {
    evt.preventDefault()
    const {data} = await axios.post(`/api/lists`, {
        date: Date.now(),
        name: listName
      }
    )
    const {id} = data
    history.push(`/lists/${id}/edit`)
  }

  const cancel = () => {
    history.push('/lists')
  }

  return (
    <div>
      <UserBar />
      <div className='page-pdg margin-40'>
        <div className='header font-20'>
          <h3>CREATE LIST</h3>
        </div>
        <div className='bg-white box-shadow'>
          <form className='list-form' onSubmit={addNewList}>
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
          <button className='action-btn white bg-blue pointer' onClick={addNewList}>CREATE</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={cancel}>CANCEL</button>
        </div>
      </div>
    </div>
  )
}

export default CreateList;