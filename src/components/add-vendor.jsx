import React, {forwardRef, useState} from 'react';
import axios from 'axios';
import Modal from './modal';
import VendorForm from './vendor-form';
import FormButtons from './form-buttons';
import AddItemButton from './add-item-button';

const AddVendor = forwardRef(
  ({insertVendor, openModal, inProductForm, ...props}, ref) => {
    const initialState = {
      name: '',
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      zip: '',
    };
    const [vendor, setVendor] = useState(initialState);

    const addVendor = async (vendor) => {
      try {
        const {data} = await axios.post('/api/vendors', vendor);
        insertVendor(data);
      } catch (err) {
        console.error(err);
      }
    };

    const clearForm = () => setVendor(initialState);

    const handleChange = (event) => {
      const {name, value} = event.target;
      setVendor({...vendor, [name]: value});
    };

    const handleSubmit = (event, closeForm) => {
      event.preventDefault();
      const {name, value} = event.target;
      const vendorData = {...vendor, [name]: value};
      addVendor(vendorData);
      clearForm();
      closeForm();
    };

    const cancel = (closeForm) => {
      clearForm();
      closeForm();
    };

    const renderVendorForm = (closeForm) => (
      <VendorForm
        vendor={vendor}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userMsg=""
        formButtons={
          <FormButtons
            submitText="Add"
            handleSubmit={(e) => handleSubmit(e, closeForm)}
            cancel={() => cancel(closeForm)}
          />
        }
      />
    );

    const renderAddVendorButton = (open) => {
      return inProductForm ? (
        <AddItemButton
          open={openModal || open}
          text="Add a vendor"
          ref={ref}
          {...props}
        />
      ) : (
        <button className="action-btn" open={open}>
          Add a vendor
        </button>
      );
    };

    return (
      <Modal
        triggerModal={renderAddVendorButton}
        renderModalContent={renderVendorForm}
      />
    );
  }
);

export default AddVendor;
