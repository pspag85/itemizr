import React, {useState, useEffect} from 'react';
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

  const bodyClickHandler = () => {
    const body = document.querySelector('body');
    body.addEventListener('click', (evt) => {
      if (evt.target !== 'options-container') {
        if (vendorOptionsState) setVendorOptionsState(false);
        else if (unitOptionsState) setUnitOptionsState(false);
        else if (categoryOptionsState) setCategoryOptionsState(false);
      }
    });
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      bodyClickHandler();
    }
    return () => (subscribed = false);
  }, [bodyClickHandler]);

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
      <div className="product-form">
        <form className="product-form-inputs row" onSubmit={handleSubmit}>
          <label className="hidden-label" htmlFor="name">
            Name
          </label>
          <input
            placeholder={name || 'Name'}
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label className="hidden-label" htmlFor="productNumber">
            Product No.
          </label>
          <input
            id="product-number"
            placeholder={productNumber || 'No.'}
            title="Product number is read only" // TODO: show on click
            disabled
          />
          <label className="hidden-label" htmlFor="category">
            Category
          </label>
          <Select
            currentSelection={category}
            defaultSelection="Category"
            toggleOptions={toggleCategoryOptions}
          />
          <label className="hidden-label" htmlFor="vendor">
            Vendor
          </label>
          <Select
            currentSelection={vendorName}
            defaultSelection="Vendor"
            toggleOptions={toggleVendorOptions}
          />
          <div className="price-input">
            <label className="hidden-label" htmlFor="price">
              Price
            </label>
            <input
              placeholder={price}
              name="price"
              value={price}
              onChange={handleChange}
            />
            <div className="unit-input">
              <div className="flex-item">
                <label className="hidden-label" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  placeholder={quantity}
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-item">
                <label className="hidden-label" htmlFor="unit">
                  Unit
                </label>
                <Select
                  currentSelection={unit}
                  defaultSelection="Unit"
                  toggleOptions={toggleUnitOptions}
                />
              </div>
            </div>
          </div>
          <label className="hidden-label" htmlFor="par">
            Par
          </label>
          <input
            placeholder={par}
            name="par"
            value={par}
            onChange={handleChange}
          />
          <label className="hidden-label" htmlFor="onHand">
            On-hand
          </label>
          <input
            placeholder={onHand}
            name="onHand"
            value={onHand}
            onChange={handleChange}
          />
        </form>
        <div className="row options-row">
          <div className="hidden-cell"></div>
          <div className="hidden-cell"></div>
          <div className="hidden-cell category-options-wrapper">
            {categoryOptionsState && (
              <Options
                type="category"
                endpoint="categories"
                currentSelection={category}
                handleChange={handleChange}
                overflowState={toggleCategoryOptions}
              />
            )}
          </div>
          <div className="hidden-cell vendor-options-wrapper">
            {vendorOptionsState && (
              <Options
                type="vendor"
                endpoint="vendors"
                currentSelection={vendorName}
                handleChange={handleChange}
                overflowState={toggleVendorOptions}
              />
            )}
          </div>
          <div className="hidden-cell unit-options-wrapper">
            {unitOptionsState && (
              <Options
                type="unit"
                endpoint="units"
                currentSelection={unit}
                handleChange={handleChange}
                overflowState={toggleUnitOptions}
              />
            )}
          </div>
          <div className="hidden-cell"></div>
          <div className="hidden-cell"></div>
        </div>
        <div className="user-msg">{userMsg}</div>
        <div className="form-button-wrapper">{formButtons}</div>
      </div>
    </div>
  );
};

export default ProductForm;
