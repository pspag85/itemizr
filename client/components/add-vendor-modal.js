import React, {Fragment} from 'react'
import Popup from 'reactjs-popup'
import AddVendorForm from './add-vendor-form'

const AddVendorModal = ({insertVendor}) => {
  return (
    <Fragment>
      <Popup
        trigger={
          <button className='action-btn'>
            Add a vendor
          </button>
        } modal>
        {close => (
          <div id='vendor-modal' className='modal'>
            <h2 className='header'>Add a vendor</h2>
            <a className='close' onClick={close}>&times;</a>
            <AddVendorForm insertVendor={insertVendor} closeForm={close} />
          </div>
        )}
      </Popup>
    </Fragment>
  )
}

export default AddVendorModal
