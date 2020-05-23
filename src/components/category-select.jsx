import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddCategory from './add-category';
import '../css/category-select.css';
import DeleteButton from './delete-button';

const CategorySelect = ({currentCategory, handleChange, toggleState}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/categories');
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  }, [setCategories]);

  const insertCategory = (category) => {
    setCategories([...categories, category]);
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const submitCategory = (event) => {
    event.target.name = event.target.getAttribute('name');
    handleChange(event);
    toggleState();
  };

  return (
    <div className="category-select custom-select">
      <select size={categories.length || 1}>
        {!categories.length ? (
          <option value="Select a category" />
        ) : (
          categories.map(({name}) => (
            <Fragment>
              <option
                key={name + Math.random()}
                name="category"
                value={name}
                selected={name === currentCategory}
                onClick={(e) => submitCategory(e)}
              >
                {name}
              </option>
            </Fragment>
          ))
        )}
      </select>
      <AddCategory
        insertCategory={insertCategory}
        closeCategoryOptions={toggleState}
      />
    </div>
  );
};

export default CategorySelect;
