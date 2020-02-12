import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import VendorLink from './vendor-link';

const Vendors = withRouter(() => {
  const [vendors, setVendors] = useState([])

  const loadVendors = async () => {
    try {
      const {data} = await axios.get('/api/vendors')
      setVendors(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadVendors()
  }, [])

  const [values, setValues] = useState({name: '', contact: ''})

  const handleChange = evt => {
    console.log(evt.target.value)
    const {name, value} = evt.target
    setValues({...values, [name]: value})
  }

  const addNewVendor = async evt => {
    evt.preventDefault()
    const {name, contact} = values
    const {data} = await axios.post('/api/vendors', {
        name,
        contact
      }
    )
  }

  return (
    <Fragment>
      <div className='page-pdg'>
        <div className='header row ft-20'>
          <h3>Vendors</h3>
        </div>
        <div className='bg-white box-shadow'>
          {vendors.map(({id, name, contact}) => <VendorLink
            key={name + Math.random()}
            className='vendor'
            id={id}
            name={name}
            contact={contact}
          />)}
        </div>
        <Link to='/vendors/add' className='add-container pointer box-shadow'>
          <h3>+ Add Vendor</h3>
        </Link>
      </div>
    </Fragment>
  )
})

export default Vendors
