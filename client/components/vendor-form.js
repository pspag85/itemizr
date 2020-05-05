import React from 'react'

const VendorForm = ({
  vendor,
  handleChange,
  handleSubmit,
  closeForm,
  userMsg,
  formButtons
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='name'>Vendor name</label>
        <input name='name' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='email'>Email</label>
        <input name='email' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='phone'>Phone</label>
        <input name='phone' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='firstName'>First Name</label>
        <input name='firstName' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last Name</label>
        <input name='lastName' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='address_1'>Address Line 1</label>
        <input name='address_1' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='address_2'>Address Line 2</label>
        <input name='address_2' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='city'>City</label>
        <input name='city' onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor='state'>Province / State</label>
        <select name='state' onChange={handleChange}>
          <option value='Arizona'>Arizona</option>
          <option value='California'>California</option>
          <option value='Florida'>Florida</option>
          <option value='New York'>New York</option>
          <option value='New Jersey'>New Jersey</option>
          <option value='Quebec'>Quebec</option>
          <option value='British Columbia'>British Columbia</option>
        </select>
      </div>
      <div className='form-row'>
        <label htmlFor='zipcode'>Postal / Zipcode</label>
        <input name='zipcode' onChange={handleChange} />
      </div>
      <div>
        <button type='submit' className='action-btn' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </form>
  </div>
)

export default VendorForm;
