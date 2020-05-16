import React, {forwardRef} from 'react';
import '../css/add-item-button.css';

const AddItemButton = forwardRef(({open, handleClick, ...props}, ref) => (
  <div className="add-item-wrapper flex ctr-items justify-ctr">
    <div
      className="flex ctr-items pointer"
      onClick={handleClick}
      ref={ref}
      {...props}
    >
      <img src="/img/add.png" />
      <h5>{props.text}</h5>
    </div>
  </div>
));

export default AddItemButton;
