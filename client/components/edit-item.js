import React, {useState} from 'react'
import {connect} from 'react-redux'
const $ = require('jquery')
import {updateItem} from '../store'

const EditItem = ({id, name, onHand, par, orderQty, deleteItem, putItem}) => {
  const [values, setValues] = useState({id, name, onHand, par, orderQty})  
  const handleChange = evt => {
    console.log(evt.target)
    const {name, value} = evt.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const value = event.target.querySelector('input').value //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    const itemData = {...values}
    const item = putItem(id, itemData)
    console.log('item:  ', item)
    if(item) {
      $(() => {$('input').blur()})
    }
  }

  return (
    <div className='item row'>
      <form className='item-form' onSubmit={handleSubmit}>
        <div className='column'>
          <input
            type='text' name='name'
            value={values.name || ''}
            onChange={handleChange}
          />
        </div>      
        <div className='column'>
          <input
            type='text' name='onHand'
            value={values.onHand || ''}
            onChange={handleChange}
          />      
        </div>
        <div className='column'>
          <input
            type='text' name='par'
            value={values.par || ''}
            onChange={handleChange}
          />      
        </div>
        <div className='column'>
          <input
            type='text' name='orderQty'
            value={values.orderQty || ''}
            onChange={handleChange}
          />
        </div>
      </form>      
      <div onClick={() => deleteItem(id)} >
        <h4>&times;</h4>
      </div>
    </div>
  )
}

const mapStateToProps = ({user}) => ({user})

const getItemId = ({id}) => id

const mapDispatchToProps = (dispatch, ownProps) => ({
  putItem: (itemId, itemData) => dispatch(updateItem(itemId, itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)
