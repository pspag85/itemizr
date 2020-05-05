import React, {Fragment, useState} from 'react'
import history from '../history'
import axios from 'axios'
import Modal from './modal';
import ModalTrigger from './modal-trigger';
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

  const handleSubmit = (event, closeForm) => {
    event.preventDefault()
    const {name, value} = event.target
    const vendorData = {...vendor, [name]: value}
    addVendor(vendorData)
    closeForm()
  }

  const renderVendorForm = (closeForm) => (
    <VendorForm
      vendor={vendor}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userMsg=''
      formButtons={
        <FormButtons
          submitText='Add'
          handleSubmit={(e) => handleSubmit(e, closeForm)}
          closeForm={closeForm}
        />
      }
    />
  )

  const renderAddVendorButton = (open) => (
    <ModalTrigger  open={open} text='Add a vendor'/>
  )

  return (
    <Fragment>
      <Modal
        trigger={renderAddVendorButton}
        renderModalContent={renderVendorForm}
      />
    </Fragment>
  )
}

export default AddVendor
