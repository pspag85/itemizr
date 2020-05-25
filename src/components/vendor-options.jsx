import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const VendorOptions = ({handleChange, toggleState}) => {
  const [vendors, setVendors] = useState([]);

  const getVendors = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/vendors');
      setVendors(data);
    } catch (err) {
      console.error(err);
    }
  }, [setVendors]);

  useEffect(() => {
    getVendors();
  }, [getVendors]);

  const submitVendor = (event, name) => {
    event.target.name = 'vendor';
    event.target.value = name;
    handleChange(event);
    toggleState();
  };

  return (
    <div className="vendor-options">
      <div>
        {vendors.map(({name}) => (
          <div
            key={name + Math.random()}
            onClick={(e) => submitVendor(e, name)}
          >
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorOptions;
