import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddCategory from './add-category';
import '../css/category-options.css';
import DeleteButton from './delete-button';

const CategoryOptions = ({currentCategory, handleChange, toggleState}) => {
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

  const submitCategory = (event, name) => {
    event.target.name = 'category';
    event.target.value = name;
    handleChange(event);
    toggleState();
  };

  return (
    <div className="category-options arrow">
      <div>
        {!categories.length ? (
          <div>
            <p>Select a category</p>
          </div>
        ) : (
          categories.map(({name}) => (
            <div
              key={name + Math.random()}
              name="category"
              value={name}
              selected={name === currentCategory}
              onClick={(e) => submitCategory(e, name)}
            >
              <p>{name}</p>
            </div>
          ))
        )}
      </div>
      <AddCategory
        insertCategory={insertCategory}
        closeCategoryOptions={toggleState}
      />
    </div>
  );
};

export default CategoryOptions;
