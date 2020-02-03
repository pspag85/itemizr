import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import users from './users'
import suppliers from './suppliers'
import lists from './lists'
import items from './items'

const reducer = combineReducers({
  user,
  users,
  suppliers,
  lists,
  items
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './users'
export * from './suppliers'
export * from './lists'
export * from './items'