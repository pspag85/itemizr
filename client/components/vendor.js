import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import CreateListButton from './create-list-button';

const Vendor = withRouter(({match}) => {
  const [vendor, setVendor] = useState({name: '', contact: ''})
  const {id} = match.params

  const loadVendor = async () => {
    try {
      const {data} = await axios.get(`/api/vendors/${id}`)
      setVendor(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadVendor()
  }, [])

  return (
    <div className='page-pdg'>
      <div className='row bg-white box-shadow'>
        <div className='column'>
          <h4>{vendor.name}</h4>
        </div>
        <div className='column'>
          <h4>{vendor.contact}</h4>
        </div>
      </div>
      <CreateListButton vendorId={vendor.id}/>
    </div>
  )
})

export default Vendor