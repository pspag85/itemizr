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
    const [data, setData] = useState([])
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
          setData(data)
        }
      })
      isCancelled = true
    }, [])

    const updateData = newItem => setData([...data, newItem])
    const openForm = () => setFormState(true)
    const closeForm = () => setFormState(false)

    return (
      <Fragment>
        <UserBar showNav={true} />
        <div className='page-pdg'>
          {!data ? null : <WrappedComponent data={data} {...props} />}
          {formState
            ? <AddDataForm model={model} updateData={updateData} closeForm={closeForm} />
            : <AddDataButton openForm={openForm} dataName={model} />
          }
        </div>
      </Fragment>
    )
  }
}

export default withData
