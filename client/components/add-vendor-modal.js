import React, {Fragment} from 'react'
import Popup from 'reactjs-popup'

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
            Add a vendor
          </div>
        )}
      </Popup>
    </Fragment>
  )
}

export default AddVendorModal
