import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {useOverflowState} from '../utility/hooks';
import axios from 'axios';
import Header from '../components/header';
import AddVendor from '../components/add-vendor';
import TableHeader from '../components/table-header';
import Vendor from '../components/vendor';

const Vendors = (props) => {
  const [vendors, setVendors] = useState([]);
  const {overflowState, closeOverflow, toggleOverflow} = useOverflowState();

  const getVendors = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/vendors');
      setVendors(data);
    } catch (err) {
      console.error(err);
    }
  }, [setVendors]);

  const insertVendor = (newVendor) => setVendors([...vendors, newVendor]);
  const updateVendors = (vendorData) => {
    const updatedVendors = vendors.map((vendor) => {
      return vendor.id === vendorData.id ? vendorData : vendor;
    });
    setVendors(updatedVendors);
  };

  const deleteVendor = async (id) => {
    try {
      await axios.delete(`/api/vendors/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      const updatedVendors = vendors.filter((vendor) => vendor.id !== id);
      setVendors(updatedVendors);
    }
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      getVendors();
    }
    return () => (subscribed = false);
  }, [getVendors]);

  const getOverflowMenuState = (vendorId) => {
    const {id, isOpen} = overflowState;
    const overflowMenuState = isOpen && vendorId === id;
    return overflowMenuState;
  };

  return (
    <div className="page-pdg">
      <Header
        title="Vendors"
        action={<AddVendor insertVendor={insertVendor} />}
      />
      <table className="top-mrg-20">
        <TableHeader headers={['Name', 'Email', 'Phone', 'Products']} />
        <tbody className="table-body">
          {vendors &&
            vendors.map(({id, name, email, phone}) => (
              <Vendor
                id={id}
                key={id + Math.random()}
                vendorData={{name, email, phone}}
                updateVendors={updateVendors}
                deleteVendor={() => deleteVendor(id)}
                overflowMenuState={getOverflowMenuState(id)}
                toggleOverflowMenu={() => toggleOverflow(id)}
                closeOverflowMenu={closeOverflow}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vendors;
