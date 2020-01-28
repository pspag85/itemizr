import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import UserNav from './user-nav'
import AddItemButton from './add-item-button'
import EditItem from './edit-item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem, saveItems, cancelUpdate} from '../store'

const EditItems = ({user, getCurrentList, currentList, loadItems, items, createItem, deleteItem, saveChanges, cancelChanges, history, location}) => {
  if(!user.id) history.push('/')
  const {pathname} = location
  const listId = pathname.split('/')[2]

  useEffect(() => {
    getCurrentList(listId)
  }, [getCurrentList])

  useEffect(() => {
    loadItems(listId)
  }, [loadItems])

  const addNewItem = async () => {
    try {
      const {data} = await axios.get('/api/items')
      let id = data
      items.forEach(item => {
        if(item.id === id) id += 1
      })
      if(id) {
        const newItem = {id, name: '', onHand: '', par: '', orderQty: '', listId}
        createItem(newItem)
      }
    } catch(err) {
      console.error(err)
    }
  }

  const cancelEdit = () => {
    history.push(`/lists/${currentList.id}`)
  }

  return currentList ? (
    <Fragment>
      <UserNav />
      <div id='edit-items-page' className='items-page'>
        <div className='header font-20'>
        <h3>{currentList.name}</h3>
        </div>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['ITEM', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        <div className='row-container bg-white box-shadow'>
          {items.length > 0 && items.map(({id, name, onHand, par, orderQty}, index) => (
            <EditItem
              key={Math.random() + name}
              listId={listId}
              id={id}
              name={name}
              onHand={onHand}
              par={par}
              orderQty={orderQty}
              createItem={createItem}
              deleteItem={deleteItem}
            />
          ))}
          <AddItemButton listId={currentList.id} addNewItem={addNewItem} />
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
  createItem: newItem => dispatch(addItem(newItem)),
  deleteItem: storeId => dispatch(removeItem(storeId)),
  saveChanges: (listId, items) => dispatch(saveItems(listId, items)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)