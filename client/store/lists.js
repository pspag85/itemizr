import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import history from '../history'

const RECEIVE_LIST = 'RECEIVE_LIST'
const RECEIVE_LISTS = 'RECEIVE_LISTS'
const INSERT_LIST = 'INSERT_LIST'
const INSERT_LIST_NAME = 'INSERT_LIST_NAME'
const REMOVE_LIST = 'REMOVE_LIST'

const gotList = list => ({
  type: RECEIVE_LIST,
  list
})

const gotLists = lists => ({
  type: RECEIVE_LISTS,
  lists
})

const addedList = list => ({
  type: 'INSERT_LIST',
  list
})

const addedListName = listName => ({
  type: 'INSERT_LIST_NAME',
  listName
})

const removedList = listId => ({
  type: REMOVE_LIST,
  listId
})

export const getList = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/lists/${id}`)
    dispatch(gotList(data))
  } catch(err) {
    console.error(err)
  }
}

export const getLists = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/lists/`)
    dispatch(gotLists(data))
  } catch(err) {
    console.error(err)
  }
}

export const addList = () => async dispatch => {
  try {
    const {data} = await axios.post(`/api/lists`, {
        date: Date.now(),
        name
      }
    )
    dispatch(addedList(data))
  } catch(err) {
    console.error(err)
  }
}

export const addListName = (id, name) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/lists/${id}`, {
        name
      }
    )
    console.log(data)
    dispatch(addedListName(data))
  } catch(err) {
    console.error(err)
  }
}

export const removeList = id => async dispatch => {
  try {
    await axios.delete(`/api/lists/${id}`)
    dispatch(removedList(id))
  } catch(err) {
    console.error(err)
  }
}

const initialState = []

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LIST:
      const alreadyIn = state.some(({id}) => id && id === action.list.id)
      if (alreadyIn) {
        return state.map(eachList => {
          if (eachList.id === action.list.id) {
            return action.list
          } else {
            return eachList
          }
        })
      } else {
        return [action.list, ...state]
      }
    case RECEIVE_LISTS:
      return action.lists
    case INSERT_LIST:
      return [...state, action.list]
    case INSERT_LIST_NAME:
      return state.map((list, idx, arr) => {
        if(list.id === action.listId) {
          list = Object.assign(list, action.listName)
        }
        return list
      })         
    case REMOVE_LIST:
      return state.filter(eachList => eachList.id !== action.listId)
    default:
      return state
  }
}

export default listsReducer
