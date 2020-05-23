import React, {Fragment, useState} from 'react';
import axios from 'axios';
import AddItemButton from './add-item-button';
import FormButtons from './form-buttons';
import Modal from './modal';

const AddCategory = ({insertCategory, closeCategoryOptions}) => {
  const [category, setCategory] = useState('');

  const addCategory = async (name) => {
    const categoryData = {name};
    try {
      const {data} = await axios.post('/api/categories', categoryData);
      insertCategory(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setCategory(value);
  };

  const handleSubmit = (event, closeForm) => {
    event.preventDefault();
    addCategory(category);
    setCategory('');
    closeCategoryOptions();
    closeForm();
  };

  const renderCategoryForm = (closeForm) => (
    <div>
      <form className="category-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input name="category" value={category} onChange={handleChange} />
        <FormButtons
          submitText="Add"
          handleSubmit={(e) => handleSubmit(e, closeForm)}
          closeForm={closeForm}
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
