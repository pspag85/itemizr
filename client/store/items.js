import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const INSERT_ITEM = 'INSERT_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

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

export const getItems = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/items')
    dispatch(gotItems(data))
  } catch(err) {
    console.error(err)
  }
}

export const addItem = itemData => async dispatch => {
  try {
    const {data} = await axios.post(`/api/items`, itemData)
    dispatch(addedItem(data))
  } catch(err) {
    console.error(err)
  }
}

export const removeItem = id => async dispatch => {
  try {
    await axios.get(`/api/items/${id}`)
    dispatch(removedItem(id))
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
      const alreadyIn = state.some(eachItem => eachItem.id === action.item.id)
      if (alreadyIn) {
        return state.map(eachItem => {
          if (eachItem.id === action.item.id) {
            return action.item
          } else {
            return eachItem
          }
        })
      } else {
        return [...state, action.item]
      }
    case REMOVE_ITEM:
      return state.filter(eachItem => eachItem.id !== action.itemId)
    default:
      return state
  }
}

export default itemsReducer
