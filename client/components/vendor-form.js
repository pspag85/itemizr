import React, {useState} from 'react'
import axios from 'axios'

const VendorForm = ({updateVendors, closeVendorForm}) => {
  const [vendor, setVendor] = useState({name: '', email: '', phone: ''})

  const addVendor = async vendor => {
    try {
      const {data} = await axios.post('/api/vendors', vendor)
      updateVendors(data)
    } catch(err) {
      console.error(err)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target
    setVendor({...vendor, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const {name, value} = event.target
    const newVendor = {...vendor, [name]: value}
    addVendor(newVendor)
    setVendor({name: '', email: '', phone: ''})
    closeVendorForm()
  }

  return (
    <div>
      <form className='vendor-form row vt-pdg-20' onSubmit={handleSubmit}>
        <div className='column'>
          <input type="text" name='name' value={vendor.name} onChange={handleChange} />
        </div>
        <div className='column'>
          <input type="text" name='email' value={vendor.email} onChange={handleChange} />
        </div>
        <div className='column'>
          <input type="text" name='phone' value={vendor.phone} onChange={handleChange} />
        </div>
        <div>
          <button type='submit' className='action-btn white bg-drk-blue pointer' onClick={handleSubmit}>ADD</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={closeVendorForm}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default VendorForm;
