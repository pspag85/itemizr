import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import SupplierLink from './supplier-link';

const Suppliers = withRouter(() => {
  const [suppliers, setSuppliers] = useState([])

  const loadSuppliers = async () => {
    try {
      const {data} = await axios.get('/api/suppliers')
      setSuppliers(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadSuppliers()
  }, [])

  const [values, setValues] = useState({name: '', contact: ''})

  const handleChange = evt => {
    console.log(evt.target.value)
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
  }

  return (
    <Fragment>
      <div className='page-pdg'>
        <div className='header row font-20'>
          <h3>Suppliers</h3>
        </div>
        <div className='bg-white box-shadow'>
          {suppliers.map(({id, name, contact}) => <SupplierLink
            key={name + Math.random()}
            className='supplier'
            id={id}
            name={name}
            contact={contact}
          />)}
        </div>
        <Link to='/suppliers/add' className='add-container pointer box-shadow'>
          <h3>+ Add Supplier</h3>
        </Link>
      </div>
    </Fragment>
  )
})

export default Suppliers
