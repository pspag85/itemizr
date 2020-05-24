import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import '../css/product-form.css';
import VendorSelect from './vendor-select';
import CategorySelect from './category-options';

const ProductForm = ({
  product,
  handleChange,
  handleSubmit,
  closeForm,
  userMsg,
  formButtons,
}) => {
  const [vendors, setVendors] = useState([]);
  const [categorySelectState, setCategorySelectState] = useState(false);

  const getVendors = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/vendors/names');
      setVendors(data);
    } catch (err) {
      console.error(err);
    }
  }, [setVendors]);

  useEffect(() => {
    getVendors();
  }, [getVendors]);

  const toggleCategorySelectState = () =>
    setCategorySelectState(!categorySelectState);

  return (
    <div className="product-form-wrapper">
      <form className="product-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input
          placeholder={product.name || 'Name'}
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          id="product-number"
          placeholder={product.productNumber || 'No.'}
          title="Product number is read only" // TODO: show on click
          disabled
        />
        <div
          className="flex ctr-items space-around custom-input custom-select arrow"
          onClick={toggleCategorySelectState}
        >
          <p className="selected-category">
            {product.category || 'Select a category'}
          </p>
          <p className="down-arrow">&#748;</p>
        </div>
        <VendorSelect
          currentVendor={product.vendor}
          handleChange={handleChange}
          vendors={vendors}
        />
        <div className="price-input">
          <input
            placeholder={product.price}
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <div>
            <input
              placeholder={product.quantity}
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
            />
            <select name="unit" onChange={handleChange} defaultValue="Unit">
              <option value="Unit">Unit</option>
              <option value="Case">Case</option>
              <option value="Tray">Tray</option>
              <option value="Bag">Bag</option>
            </select>
          </div>
        </div>
        <input
          placeholder={product.par}
          name="par"
          value={product.par}
          onChange={handleChange}
        />
        <input
          placeholder={product.onHand}
          name="onHand"
          value={product.onHand}
          onChange={handleChange}
        />
      </form>
      {categorySelectState && (
        <CategorySelect
          currentCategory={product.category}
          handleChange={handleChange}
          toggleState={toggleCategorySelectState}
        />
      )}
      <div className="user-msg">{userMsg}</div>
      <div>{formButtons}</div>
    </div>
  );
};

export default ProductForm;
