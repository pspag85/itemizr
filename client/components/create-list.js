import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addList} from '../store'

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
      <div className='edit-items-container bg-white box-shadow'>
        <form className='item-form' onSubmit={handleClick}>
          <label>LIST NAME</label>
          <input
            type='text'
            value={listName}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className='save'>
        <Link to='/lists' className='cancel'>CANCEL</Link>
        <button className='save-button pointer' onClick={handleClick}>CREATE</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createList: name => dispatch(addList(name))
})

export default connect(null, mapDispatchToProps)(CreateList)