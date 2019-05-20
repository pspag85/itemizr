import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const RECEIVE_USERS = 'RECEIVE_USERS'

const gotUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')
    const users = res.data
    dispatch(gotUsers(users))
  } catch(err) {
    console.error(err)
  }
}

const initialState = []

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.user
    // case REMOVE_USER:
    //   return state.filter(eachUser => eachUser.id !== action.userId)
    default:
      return state
  }
}

export default usersReducer
