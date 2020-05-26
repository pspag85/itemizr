import React, {useState} from 'react';
import '../css/product-form.css';
import Options from './options';

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

  const toggleCategoryOptionsState = () =>
    setCategoryOptionsState(!categoryOptionsState);
  const toggleVendorOptionsState = () =>
    setVendorOptionsState(!vendorOptionsState);
  const toggleUnitOptionsState = () => setUnitOptionsState(!unitOptionsState);

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
        <div
          className="flex ctr-items space-between custom-input custom-select arrow"
          onClick={toggleCategoryOptionsState}
        >
          <div className={`category-select ${!category && 'secondary-txt'}`}>
            <p>{category || 'Category'}</p>
          </div>
          <span className="flex-end down-arrow">&#8964;</span>
        </div>
        <div
          className="flex ctr-items space-between custom-input custom-select arrow"
          onClick={toggleVendorOptionsState}
        >
          <div className={`vendor-select ${!vendorName && 'secondary-txt'}`}>
            <p>{vendorName || 'Vendor'}</p>
          </div>
          <span className="flex-end down-arrow">&#8964;</span>
        </div>
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
            <div
              className="flex ctr-items space-between custom-input custom-select arrow"
              onClick={toggleUnitOptionsState}
            >
              <div className={`unit-select ${!unit && 'secondary-txt'}`}>
                <p>{unit || 'Unit'}</p>
              </div>
              <span className="flex-end down-arrow">&#8964;</span>
            </div>
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
          toggleState={toggleCategoryOptionsState}
        />
      )}
      {vendorOptionsState && (
        <Options
          type="vendor"
          endpoint="vendors"
          currentSelection={vendorName}
          handleChange={handleChange}
          toggleState={toggleVendorOptionsState}
        />
      )}
      {unitOptionsState && (
        <Options
          type="unit"
          endpoint="units"
          currentSelection={unit}
          handleChange={handleChange}
          toggleState={toggleUnitOptionsState}
        />
      )}
      <div className="user-msg">{userMsg}</div>
      <div>{formButtons}</div>
    </div>
  );
};

export default ProductForm;
