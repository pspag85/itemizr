import React, {Fragment} from 'react'
import Popup from 'reactjs-popup'
import VendorForm from './vendor-form'

const AddVendorModal = (props) => {
  return (
    <Fragment>
      <Popup
        trigger={
          <button className='action-btn white bg-drk-blue pointer'>
            Add a vendor
          </button>
        } modal>
        {close => (
          <div id='vendor-modal' className='modal'>
            <h2 className='header'>Add a vendor</h2>
            <a className="close" onClick={close}>&times;</a>
            <VendorForm closeForm={close}/>
          </div>
        )}
      </Popup>
    </Fragment>
  )
}

export default AddVendorModal
