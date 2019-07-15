import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import axios from 'axios'

const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const INSERT_ITEM = 'INSERT_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const SAVE_ITEMS = 'SAVE_ITEMS'

const gotItems = items => ({
  type: RECEIVE_ITEMS,
  items
})

const addedItem = item => ({
  type: 'INSERT_ITEM',
  item
})

const removedItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

const savedItems = items => ({
  type: SAVE_ITEMS,
  items
})

export const getItems = listId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/items/${listId}`)
    dispatch(gotItems(data))
  } catch(err) {
    console.error(err)
  }
}

export const addItem = data => async dispatch => {
  try {
    dispatch(addedItem(data))
  } catch(err) {
    console.error(err)
  }
}

export const removeItem = id => async dispatch => {
  try {
    dispatch(removedItem(id))
  } catch(err) {
    console.error(err)
  }
}

export const saveItems = (listId, items) => async dispatch => {
  console.log('items: ', items)
  try {
    await axios.delete(`/api/items/${listId}`)
    const {data} = await axios.post(`/api/items`, items)
    console.log('items in store: ', data)
    dispatch(savedItems(data))
    history.push(`/lists/${listId}`)
  } catch(err) {
    console.error(err)
  }
}

export const cancelUpdate = listId => async dispatch => {
  try {
    console.log('changes canceled')
  } catch(err) {
    console.error(err)
  }
}

const initialState = []

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items
    case INSERT_ITEM:
      return [...state, action.item]
    case REMOVE_ITEM:
      return state.filter(eachItem => eachItem.id !== action.itemId)
    case SAVE_ITEMS:
      return action.items      
    default:
      return state
  }
}

export default itemsReducer
