import React, {forwardRef} from 'react';

const EditVendorTrigger = forwardRef(({open, ...props}, ref) => (
  <button className="custom-btn" ref={ref} {...props}>
    <img src="/img/edit.png" />
    <h4>Edit</h4>
  </button>
));

export default EditVendorTrigger;
