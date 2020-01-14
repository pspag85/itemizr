import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import UserPage from './user-page'
import AddItemButton from './add-item-button'
import AddItem from './add-item'
import EditItem from './edit-item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem, saveItems, cancelUpdate} from '../store'
import '../css/edit-items.css'

const EditItems = ({user, getCurrentList, currentList, loadItems, items, createItem, deleteItem, saveChanges, cancelChanges, history, location}) => {
  if(!user.id) history.push('/')
  const {pathname} = location
  const listId = pathname.split('/')[2]

  const [itemsState, setItemsState] = useState(items)

  useEffect(() => {
    getCurrentList(listId)
  }, [])

  useEffect(() => {
    loadItems(listId)
  }, [])

  const submitItem = (evt, input) => {
    event.preventDefault()
    console.log('evt:  ', evt)
    const {value} = event.target
    const itemData = {}
    itemData[input] = value
    setItemsState([...itemsState, itemData])
  }

  const addItem = (evt) => {
    const newItem = {name: '', onHand: 0, par: 0, orderQty: 0}
    setItemsState([...itemsState, newItem])
  }

  const cancelEdit = () => {
    cancelChanges(currentList.id)
    history.push(`/lists/${currentList.id}`)
  }

  // const itemsArr = !Array.isArray(itemsState) ? [{}] : itemsState
  return currentList ? (
    <Fragment>
      <UserPage />
      <div id='edit-items-body'>
        <div className='header row font-20'>
        <h3>{currentList.name}</h3>
        </div>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['ITEM', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        <div className='edit-items-container bg-white box-shadow'>
          {Array.isArray(itemsState) && itemsState.map(({id, name, onHand, par, orderQty}, index) => (
            <EditItem
              key={Math.random()}
              id={id}
              name={name}
              onHand={onHand}
              par={par}
              orderQty={orderQty}
              deleteItem={deleteItem}
              submitItem={submitItem}
            />
          ))}
          <AddItemButton listId={currentList.id} addNewItem={addItem} />
        </div>
        <div className='save'>
          <button className='action-btn white bg-blue pointer' onClick={() => saveChanges(currentList.id, items)}>SAVE CHANGES</button>
          <h4 className='cancel-btn pointer light-font' onClick={cancelEdit}>CANCEL</h4>
        </div>
      </div>
    </Fragment>
  ) : null
}

const mapStateToProps = ({user, lists, items}) => ({user, currentList: lists[0], items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId)),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id)),
  saveChanges: (listId, items) => dispatch(saveItems(listId, items)),
  cancelChanges: listId => dispatch(cancelUpdate(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)