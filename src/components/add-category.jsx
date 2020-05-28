import React, {Fragment, useState} from 'react';
import axios from 'axios';
import AddItemButton from './add-item-button';
import FormButtons from './form-buttons';
import Modal from './modal';

const AddCategory = ({selectCategory, closeCategoryOptions}) => {
  const [category, setCategory] = useState('');

  const addCategory = async (name) => {
    const categoryData = {name};
    try {
      const {data} = await axios.post('/api/categories', categoryData);
    } catch (err) {
      console.error(err);
    }
  };

  const clearForm = () => setCategory('');

  const handleChange = (event) => {
    const {value} = event.target;
    setCategory(value);
  };

  const handleSubmit = (event, closeForm) => {
    event.preventDefault();
    addCategory(category);
    closeCategoryOptions();
    clearForm();
    closeForm();
    selectCategory(category);
  };

  const cancel = (closeForm) => {
    clearForm();
    closeForm();
  };

  const renderCategoryForm = (closeForm) => (
    <div>
      <form className="category-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input name="category" value={category} onChange={handleChange} />
        <FormButtons
          submitText="Add"
          handleSubmit={(e) => handleSubmit(e, closeForm)}
          cancel={() => cancel(closeForm)}
        />
      </form>
    </div>
  );

  const renderAddCategoryButton = (open) => (
    <AddItemButton open={open} text="Add a category" handleClick={null} />
  );

  return (
    <Modal
      triggerModal={renderAddCategoryButton}
      renderModalContent={renderCategoryForm}
    />
  );
};

export default AddCategory;
