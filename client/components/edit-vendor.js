import React, {useState} from 'react'
import axios from 'axios'
import VendorForm from './vendor-form';
import FormButtons from './form-buttons'

const EditVendor = ({id, currentState, updateVendors, closeForm}) => {
  const [userMsg, setUserMsg] = useState('')
  const [vendor, setVendor] = useState(currentState)

  const displayUserMsg = (msg) => setUserMsg(msg)

  const editVendor = async (vendor) => {
    try {
      await axios.put('/api/vendors', {id, ...vendor})
      updateVendors({id, ...vendor})
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
    editVendor(vendor)
    closeForm()
  }

  return (
    <tr>
      <td colSpan='8'>
        <VendorForm
          vendor={vendor}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userMsg={userMsg}
          formButtons={
            <FormButtons
              submitText='Save'
              handleSubmit={handleSubmit}
              closeForm={closeForm}
            />
          }
        />
      </td>
    </tr>
  )
}

export default EditVendor;
