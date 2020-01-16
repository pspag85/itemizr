import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import axios from 'axios'

const GET_ITEMS = 'GET_ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

const gotItems = items => ({
  type: GET_ITEMS,
  items
})

const addedItem = newItem => ({
  type: ADD_ITEM,
  newItem
})

const removedItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

const updatedItem = (itemId, item) => ({
  type: UPDATE_ITEM,
  itemId,
  item
})

export const getItems = listId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/lists/${listId}/items`)
    dispatch(gotItems(data))
  } catch(err) {
    console.error(err)
  }
}

export const addItem = newItem => dispatch => {
  dispatch(addedItem(newItem))
}

export const removeItem = id => async dispatch => {
  try {
    dispatch(removedItem(id))
  } catch(err) {
    console.error(err)
  }
}

export const updateItem = (itemId, item) => async dispatch => {
  try {
    dispatch(updatedItem(itemId, item))
  } catch(err) {
    console.error(err)
  }
}

export const saveItems = (listId, items, isInit) => async dispatch => {
  try {
    !isInit && await axios.delete(`/api/lists/${listId}/items`)
    const {data} = await axios.post(`/api/items`, items)
    !isInit && history.push(`/lists/${listId}`)
  } catch(err) {
    console.error(err)
  }
}

const initialState = []

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items
    case ADD_ITEM:
      return [...state, action.newItem]
    case REMOVE_ITEM:
      return state.filter(eachItem => eachItem.id !== action.itemId)
    case UPDATE_ITEM:
      return state.map(item => {
        if(item.id === action.itemId) {
          item = Object.assign(item, action.item)
        }
        return item
      })
    default:
      return state
  }
}

export default itemsReducer
