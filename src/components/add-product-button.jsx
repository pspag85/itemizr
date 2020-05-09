import React from 'react';
import '../css/add-product-button.css';

const AddProductButton = ({openForm}) => (
  <div className="add-product-wrapper flex ctr-items justify-ctr">
    <div
      className="flex ctr-items pointer"
      onClick={openForm}
    >
      <img src="/img/add.png" />
      <h5> Add a product </h5>
    </div>
  </div>
);

export default AddProductButton;
