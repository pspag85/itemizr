// import {createStore, applyMiddleware} from 'redux'
// import loggerMiddleware from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import axios from 'axios'

// const RECEIVE_USER = 'RECEIVE_USER'

// const gotUser = user => ({
//   type: RECEIVE_USER,
//   user
// })

// export const getUser = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/users/user')
//     const user = res.data
//     dispatch(gotUser(user))
//   } catch(err) {
//     console.error(err)
//   }
// }

// const initialState = []

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_USERS:
//       return action.users
//     case RECEIVE_USER:
//       const alreadyIn = state.some(eachUser => eachUser.id === action.user.id)
//       if (alreadyIn) {
//         return state.map(eachUser => {
//           if (eachUser.id === action.user.id) {
//             return action.user
//           } else {
//             return eachUser
//           }
//         })
//       } else {
//         return [...state, action.user]
//       }
//     case REMOVE_ONE_USER:
//       return state.filter(eachUser => eachUser.id !== action.userId)
//     default:
//       return state
//   }
// }

// export default usersReducer
