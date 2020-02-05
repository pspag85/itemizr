import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import axios from 'axios'

const AddSupplier = withRouter(({history}) => {

  const [values, setValues] = useState({name: '', contact: ''})

  const handleChange = evt => {
    const {name, value} = evt.target
    setValues({...values, [name]: value})
  }

  const addNewSupplier = async evt => {
    evt.preventDefault()
    const {name, contact} = values
    const {data} = await axios.post('/api/suppliers', {
        name,
        contact
      }
    )
    history.push(`/suppliers`)
  }

  const cancel = () => {
    history.push('/suppliers')
  }

  return (
    <Fragment>
      <div className='page-pdg'>
        <div className='bg-white box-shadow'>
          <form className='list-form' onSubmit={addNewSupplier}>
            <label className='secondary-txt'>SUPPLIER NAME</label>
            <input
              className='bg-white box-shadow ft-20'
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
            />
            <label className='secondary-txt'>SUPPLIER CONTACT</label>
            <input
              className='bg-white box-shadow ft-20'
              type='text'
              name='contact'
              value={values.contact}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='save'>
          <button className='action-btn white bg-drk-blue pointer' type='submit' onClick={addNewSupplier}>CREATE</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={cancel}>CANCEL</button>
        </div>
      </div>
    </Fragment>
  )
})

export default AddSupplier
