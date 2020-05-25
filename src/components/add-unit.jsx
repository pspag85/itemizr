import React, {Fragment, useState} from 'react';
import axios from 'axios';
import AddItemButton from './add-item-button';
import FormButtons from './form-buttons';
import Modal from './modal';

const AddUnit = ({selectUnit, closeUnitOptions}) => {
  const [unit, setUnit] = useState('');

  const addUnit = async (name) => {
    const unitData = {name};
    try {
      const {data} = await axios.post('/api/units', unitData);
    } catch (err) {
      console.error(err);
    }
  };

  const clearForm = () => setUnit('');

  const handleChange = (event) => {
    const {value} = event.target;
    setUnit(value);
  };

  const handleSubmit = (event, closeForm) => {
    event.preventDefault();
    addUnit(unit);
    closeUnitOptions();
    clearForm();
    closeForm();
    selectUnit(unit);
  };

  const cancel = (closeForm) => {
    clearForm();
    closeForm();
  };

  const renderUnitForm = (closeForm) => (
    <div>
      <form className="unit-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input name="unit" value={unit} onChange={handleChange} />
        <FormButtons
          submitText="Add"
          handleSubmit={(e) => handleSubmit(e, closeForm)}
          cancel={() => cancel(closeForm)}
        />
      </form>
    </div>
  );

  const renderAddUnitButton = (open) => (
    <AddItemButton open={open} text="Add a unit" handleClick={null} />
  );

  return (
    <Modal
      triggerModal={renderAddUnitButton}
      renderModalContent={renderUnitForm}
    />
  );
};

export default AddUnit;
