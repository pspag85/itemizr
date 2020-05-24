import React, {Fragment} from 'react';

const VendorSelect = ({currentVendor, handleChange, vendors}) => {
  const options = vendors.filter((vendor) => vendor !== currentVendor);
  const currentSelection = currentVendor || 'Select a vendor';
  return (
    <select
      className="custom-input custom-select"
      defaultValue={currentSelection}
      name="vendor"
      onChange={handleChange}
    >
      <option value={currentSelection}>{currentSelection}</option>
      {options.map(({name}) => (
        <option key={name + Math.random()} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default VendorSelect;
