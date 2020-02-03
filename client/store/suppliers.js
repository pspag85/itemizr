import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import history from '../history'

const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER'
const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS'
const REMOVE_SUPPLIER = 'REMOVE_SUPPLIER'

const gotSupplier = supplier => ({
  type: RECEIVE_SUPPLIER,
  supplier
})

const gotSuppliers = suppliers => ({
  type: RECEIVE_SUPPLIERS,
  suppliers
})

const removedSupplier = supplierId => ({
  type: REMOVE_SUPPLIER,
  supplierId
})

export const getSupplier = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/suppliers/${id}`)
    dispatch(gotSupplier(data))
  } catch(err) {
    console.error(err)
  }
}

export const getSuppliers = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/suppliers/`)
    dispatch(gotSuppliers(data))
  } catch(err) {
    console.error(err)
  }
}

export const removeSupplier = id => async dispatch => {
  try {
    await axios.delete(`/api/suppliers/${id}`)
    dispatch(removedSupplier(id))
  } catch(err) {
    console.error(err)
  }
}

const initialState = []

const suppliersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SUPPLIER:
      return [action.supplier, ...state]
    case RECEIVE_SUPPLIERS:
      return action.suppliers
    case REMOVE_SUPPLIER:
      return state.filter(supplier => supplier.id !== action.supplierId)
    default:
      return state
  }
}

export default suppliersReducer
