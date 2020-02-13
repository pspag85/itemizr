import React, {useState} from 'react'
import axios from 'axios'

const VendorForm = ({close}) => {
  const [vendor, setVendor] = useState({name: '', email: '', phone: ''})

  const handleChange = event => {
    const {name, value} = event.target
    setVendor({...vendor, [name]: value})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/vendors', vendor)
    } catch(err) {
      console.error(err)
    } finally {
      close()
    }
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
          <button className='action-btn cancel-btn pointer light-font' onClick={close}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default VendorForm;
