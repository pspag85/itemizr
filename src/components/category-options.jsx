import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddCategory from './add-category';
import '../css/category-options.css';
import DeleteButton from './delete-button';

const CategoryOptions = ({handleChange, toggleState}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/categories');
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  }, [setCategories]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const selectCategory = (event, category) => {
    event.target.name = 'category';
    event.target.value = category;
    handleChange(event);
    toggleState();
  };

  const selectNewCategory = (category) => {
    const event = {target: {}};
    selectCategory(event, category);
  };

  return (
    <div className="category-options">
      <div>
        {categories.map((category) => (
          <div
            key={category.name + Math.random()}
            onClick={(e) => selectCategory(e, category.name)}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <AddCategory
        selectCategory={(category) => selectNewCategory(category)}
        closeCategoryOptions={toggleState}
      />
    </div>
  );
};

export default CategoryOptions;
