import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import history from '../history'

const RECEIVE_LIST = 'RECEIVE_LIST'
const RECEIVE_LISTS = 'RECEIVE_LISTS'
const INSERT_LIST = 'INSERT_LIST'
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
    const {data} = await axios.get('/api/lists')
    console.log('data:  ', data)
    dispatch(gotLists(data))
  } catch(err) {
    console.error(err)
  }
}

export const addList = () => async dispatch => {
  try {
    const {data} = await axios.post(`/api/lists`, {
        date: Date.now()
      }
    )
    dispatch(addedList(data))
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
      return action.list
    case RECEIVE_LISTS:
      return action.lists
    case INSERT_LIST:
      const alreadyIn = state.some(eachList => eachList.id === action.list.id)
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
    case REMOVE_LIST:
      return state.filter(eachList => eachList.id !== action.listId)
    default:
      return state
  }
}

export default listsReducer
