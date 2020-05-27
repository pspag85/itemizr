import React from 'react';

const Select = ({currentSelection, defaultSelection, toggleOptions}) => (
  <div
    className="flex ctr-items space-between custom-input custom-select arrow"
    onClick={toggleOptions}
  >
    <div className={`${!currentSelection && 'secondary-txt'}`}>
      <p>{currentSelection || defaultSelection}</p>
    </div>
    <span className="flex-end down-arrow">&#8964;</span>
  </div>
);

export default Select;
