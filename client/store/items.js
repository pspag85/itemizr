import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import axios from 'axios'

const GET_ITEMS = 'GET_ITEMS'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_ITEM = 'ADD_ITEM'

const gotItems = items => ({
  type: GET_ITEMS,
  items
})

const addedItem = () => ({
  type: ADD_ITEM,
  item: {}
})
const removedItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

export const getItems = listId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/lists/${listId}/items`)
    dispatch(gotItems(data))
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

export const addItem = () => dispatch => {
  console.log('adding item')
  dispatch(addedItem)
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
    case GET_ITEMS:
      return action.items
    case ADD_ITEM:
      console.log('action item:   ', action.item)
      return [action.item, ...state]
    case REMOVE_ITEM:
      return state.filter(eachItem => eachItem.id !== action.itemId)
    default:
      return state
  }
}

export default itemsReducer
