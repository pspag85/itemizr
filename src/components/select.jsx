import React from 'react';
import '../css/select.css';

const Select = ({currentSelection, defaultSelection, toggleOptions}) => (
  <div
    className="flex ctr-items space-between select arrow"
    onClick={toggleOptions}
  >
    <div className={`selected-txt ${!currentSelection && 'secondary-txt'}`}>
      <p>{currentSelection || defaultSelection}</p>
    </div>
    <span className="flex-end down-arrow">&#8964;</span>
  </div>
);

export default Select;
