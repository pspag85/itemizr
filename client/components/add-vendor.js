import React, {Fragment, useState} from 'react'
import history from '../history'
import axios from 'axios'
import Popup from 'reactjs-popup'
import VendorForm from './vendor-form'
import FormButtons from './form-buttons';

const AddVendor = ({insertVendor}) => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
  })

  const addVendor = async (vendor) => {
    try {
      const {data} = await axios.post('/api/vendors', vendor)
      insertVendor(data)
    } catch(err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setVendor({...vendor, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    const vendorData = {...vendor, [name]: value}
    addVendor(vendorData)
  }

  return (
    <Fragment>
      <Popup
        trigger={
          <button className='action-btn'>
            Add a vendor
          </button>
        } modal>
        {close => (
          <div className='modal'>
            <h2 className='header'>Add a vendor</h2>
            <a className='close' onClick={close}>&times;</a>
            <VendorForm
              vendor={vendor}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              userMsg=''
              formButtons={
                <FormButtons
                  submitText='Add'
                  handleSubmit={handleSubmit}
                  closeForm={close}
                />
              }
            />
          </div>
        )}
      </Popup>
    </Fragment>
  )
}

export default AddVendor
