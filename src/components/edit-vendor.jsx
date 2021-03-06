import React, {useState} from 'react';
import axios from 'axios';
import VendorForm from './vendor-form';
import FormButtons from './form-buttons';

const EditVendor = ({
  id,
  vendorData,
  updateVendors,
  closeOverflowMenu,
  closeForm,
}) => {
  const [vendor, setVendor] = useState(vendorData);

  const editVendor = async (vendor) => {
    try {
      await axios.put('/api/vendors', {id, ...vendor});
      updateVendors({id, ...vendor});
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setVendor({...vendor, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editVendor(vendor);
    closeOverflowMenu();
  };

  const closeEditForm = () => {
    closeOverflowMenu();
    closeForm();
  };

  return (
    <VendorForm
      vendor={vendor}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userMsg=""
      formButtons={
        <FormButtons
          submitText="Save"
          handleSubmit={handleSubmit}
          cancel={closeEditForm}
        />
      }
    />
  );
};

export default EditVendor;
