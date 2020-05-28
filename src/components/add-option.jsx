import React, {Fragment, useState} from 'react';
import axios from 'axios';
import AddVendor from './add-vendor';
import AddItemButton from './add-item-button';
import FormButtons from './form-buttons';
import Modal from './modal';

const AddOption = ({type, endpoint, selectOption, closeMenu}) => {
  const [option, setOption] = useState('');

  const addOption = async (name) => {
    const optionData = {name};
    try {
      const {data} = await axios.post(`/api/${endpoint}`, optionData);
    } catch (err) {
      console.error(err);
    }
  };

  const clearForm = () => setOption('');

  const handleChange = (event) => {
    const {value} = event.target;
    setOption(value);
  };

  const handleSubmit = (event, closeForm) => {
    event.preventDefault();
    addOption(option);
    closeMenu();
    clearForm();
    closeForm();
    selectOption(option);
  };

  const cancel = (closeForm) => {
    clearForm();
    closeForm();
  };

  const renderAddOptionForm = (closeForm) => (
    <div>
      <form className="option-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input name="option" value={option} onChange={handleChange} />
        <FormButtons
          submitText="Add"
          handleSubmit={(e) => handleSubmit(e, closeForm)}
          cancel={() => cancel(closeForm)}
        />
      </form>
    </div>
  );

  const renderAddOptionButton = (open) =>
    type === 'vendor' ? (
      <AddVendor
        openModal={open}
        insertVendor={selectOption}
        inProductForm={true}
      />
    ) : (
      <AddItemButton
        open={open}
        text={`Add a ${endpoint}`}
        handleClick={null}
      />
    );

  return (
    <Modal
      triggerModal={renderAddOptionButton}
      renderModalContent={renderAddOptionForm}
    />
  );
};

export default AddOption;
