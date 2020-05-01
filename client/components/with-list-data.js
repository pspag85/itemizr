import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import UserBar from './user-bar'
import TableHeader from './table-header'
import AddProductForm from './add-product-form'
import AddProductButton from './add-product-button'
import '../css/list.css'

const withListData = (WrappedComponent, model) => (props) => {
  const [dataState, setDataState] = useState([])
  const [addFormState, setAddFormState] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let isCancelled = false
      try {
        const {data} = await axios.get(`/api/${model}`)
        if(!isCancelled) {
          setDataState(data)
        }
      } catch(err) {
        console.error(err)
      } finally {
        isCancelled = true
      }
    }
    fetchData()
  }, [])

  const insertData = newData => setDataState([...dataState, newData])
  const updateData = updatedData => {
    const newDataState = dataState.map(rowData => rowData.id === updatedData.id ? updatedData : rowData)
    setDataState(newDataState)
  }

  const deleteRow = async id => {
    try {
      await axios.delete(`/api/${model}/${id}`)
    } catch(err) {
      console.error(err)
    } finally {
      const newDataState = dataState.filter(row => row.id !== id)
      setDataState(newDataState)
    }
  }

  const openAddForm = () => setAddFormState(true)
  const closeAddForm = () => setAddFormState(false)

  return (
    <Fragment>
      <UserBar showNav={true} />
      <div className='page-pdg'>
        {dataState && <WrappedComponent data={dataState} model={model} updateData={updateData} deleteRow={deleteRow} {...props} />}
        {addFormState
          ? <AddProductForm model={model} insertData={insertData} closeForm={closeAddForm} />
          : <AddProductButton openForm={openAddForm} dataName={model} />
        }
      </div>
    </Fragment>
  )
}

export default withListData
