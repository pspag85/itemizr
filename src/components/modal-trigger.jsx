import React, {forwardRef} from 'react';

const ModalTrigger = forwardRef(({open, ...props}, ref) => (
  <button className="action-btn" ref={ref} {...props}>
    {props.text}
  </button>
));

export default ModalTrigger;
