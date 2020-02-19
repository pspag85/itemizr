import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import UserBar from './user-bar'
import ColHeader from './col-header'
import AddDataForm from './add-data-form'
import AddDataButton from './add-data-button'
import '../css/list.css'

const withData = (WrappedComponent, model) => {
  return (props) => {
    const [dataState, setDataState] = useState([])
    const [formState, setFormState] = useState(false)

    const loadData = async () => {
      try {
        const {data} = await axios.get(`/api/${model}`)
      } catch(err) {
        console.error(err)
      }
    }

    useEffect(() => {
      let isCancelled = false
      loadData().then(data => {
        if(!isCancelled) {
          setDataState(data)
        }
      })
      isCancelled = true
    }, [])

    const insertData = newRow => setDataState([...dataState, newRow])

    const deleteRow = async (id) => {
      try {
        await axios.delete(`/api/${model}/${id}`)
      } catch(err) {
        console.error(err)
      } finally {
        const newDataState = dataState.filter(row => row.id !== id)
        setDataState(newDataState)
      }
    }

    const openForm = () => setFormState(true)
    const closeForm = () => setFormState(false)

    return (
      <Fragment>
        <UserBar showNav={true} />
        <div className='page-pdg'>
          {!dataState ? null : <WrappedComponent data={dataState} {...props} deleteRow={deleteRow}/>}
          {formState
            ? <AddDataForm model={model} insertData={insertData} closeForm={closeForm} />
            : <AddDataButton openForm={openForm} dataName={model} />
          }
        </div>
      </Fragment>
    )
  }
}

export default withData
