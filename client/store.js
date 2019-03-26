import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER'

const gotMe = user => ({
  type: GET_USER,
  user
})

export const getMe = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/me')
    const user = res.data
    dispatch(gotMe(user))
  } catch(err) {
    console.error(err)
  }
}

export const signup = formData => async dispatch => {
  try {
    const res = await axios.post('/api/users/signup', formData)
    const user = res.data
    dispatch(gotMe(user))
  } catch(err) {
    console.error(err)
  }
}

export const login = formData => async dispatch => {
  try {
    const res = await axios.put('/api/users/login', formData)
    const user = res.data
    dispatch(gotMe(user))
  } catch(err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.delete('/api/users/logout')
    dispatch(gotMe(initialState.user))
  } catch(err) {
    console.error(err)
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
