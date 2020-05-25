import React, {useState} from 'react';
import '../css/product-form.css';
import VendorOptions from './vendor-options';
import CategoryOptions from './category-options';
import UnitOptions from './unit-options';

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
          className="flex ctr-items space-between custom-input custom-select arrow"
          onClick={toggleCategoryOptionsState}
        >
          <div
            className={`category-select ${
              !product.category && 'secondary-txt'
            }`}
          >
            <p>{product.category || 'Category'}</p>
          </div>
          <span className="flex-end down-arrow">&#8964;</span>
        </div>
        <div
          className="flex ctr-items space-between custom-input custom-select arrow"
          onClick={toggleVendorOptionsState}
        >
          <div
            className={`vendor-select ${!product.vendor && 'secondary-txt'}`}
          >
            <p>{product.vendor || 'Vendor'}</p>
          </div>
          <span className="flex-end down-arrow">&#8964;</span>
        </div>
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
            <div
              className="flex ctr-items space-between custom-input custom-select arrow"
              onClick={toggleUnitOptionsState}
            >
              <div
                className={`unit-select ${!product.unit && 'secondary-txt'}`}
              >
                <p>{product.unit || 'Unit'}</p>
              </div>
              <span className="flex-end down-arrow">&#8964;</span>
            </div>
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
      {categoryOptionsState && (
        <CategoryOptions
          currentCategory={product.category}
          handleChange={handleChange}
          toggleState={toggleCategoryOptionsState}
        />
      )}
      {vendorOptionsState && (
        <VendorOptions
          currentVendor={product.vendor}
          handleChange={handleChange}
          toggleState={toggleVendorOptionsState}
        />
      )}
      {unitOptionsState && (
        <UnitOptions
          currentUnit={product.unit}
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
