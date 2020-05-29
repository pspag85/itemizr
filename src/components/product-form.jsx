import React, {useState} from 'react';
import '../css/product-form.css';
import Options from './options';
import Select from './select';

const ProductForm = ({
  product,
  handleChange,
  handleSubmit,
  userMsg,
  formButtons,
}) => {
  const [categoryOptionsState, setCategoryOptionsState] = useState(false);
  const [vendorOptionsState, setVendorOptionsState] = useState(false);
  const [unitOptionsState, setUnitOptionsState] = useState(false);

  // can this be dried up inside the select or options component?
  const toggleVendorOptions = () => {
    categoryOptionsState && setCategoryOptionsState(false);
    unitOptionsState && setUnitOptionsState(false);
    setVendorOptionsState(!vendorOptionsState);
  };
  const toggleCategoryOptions = () => {
    vendorOptionsState && setVendorOptionsState(false);
    unitOptionsState && setUnitOptionsState(false);
    setCategoryOptionsState(!categoryOptionsState);
  };
  const toggleUnitOptions = () => {
    vendorOptionsState && setVendorOptionsState(false);
    categoryOptionsState && setCategoryOptionsState(false);
    setUnitOptionsState(!unitOptionsState);
  };

  const {
    name,
    productNumber,
    category,
    vendor,
    price,
    quantity,
    unit,
    par,
    onHand,
  } = product;

  const vendorName = typeof vendor !== 'string' ? vendor.name : vendor;

  return (
    <div className="product-form-wrapper">
      <form className="product-form row vt-pdg-20" onSubmit={handleSubmit}>
        <input
          placeholder={name || 'Name'}
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          id="product-number"
          placeholder={productNumber || 'No.'}
          title="Product number is read only" // TODO: show on click
          disabled
        />
        <Select
          currentSelection={vendorName}
          defaultSelection="Vendor"
          toggleOptions={toggleVendorOptions}
        />
        <Select
          currentSelection={category}
          defaultSelection="Category"
          toggleOptions={toggleCategoryOptions}
        />
        <div className="price-input">
          <input
            placeholder={price}
            name="price"
            value={price}
            onChange={handleChange}
          />
          <div>
            <input
              placeholder={quantity}
              name="quantity"
              value={quantity}
              onChange={handleChange}
            />
            <Select
              currentSelection={unit}
              defaultSelection="Unit"
              toggleOptions={toggleUnitOptions}
            />
          </div>
        </div>
        <input
          placeholder={par}
          name="par"
          value={par}
          onChange={handleChange}
        />
        <input
          placeholder={onHand}
          name="onHand"
          value={onHand}
          onChange={handleChange}
        />
      </form>
      {categoryOptionsState && (
        <Options
          type="category"
          endpoint="categories"
          currentSelection={category}
          handleChange={handleChange}
          toggleState={toggleCategoryOptions}
        />
      )}
      {vendorOptionsState && (
        <Options
          type="vendor"
          endpoint="vendors"
          currentSelection={vendorName}
          handleChange={handleChange}
          toggleState={toggleVendorOptions}
        />
      )}
      {unitOptionsState && (
        <Options
          type="unit"
          endpoint="units"
          currentSelection={unit}
          handleChange={handleChange}
          toggleState={toggleUnitOptions}
        />
      )}
      <div className="user-msg">{userMsg}</div>
      <div>{formButtons}</div>
    </div>
  );
};

export default ProductForm;
