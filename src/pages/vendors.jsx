import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Header from '../components/header';
import AddVendor from '../components/add-vendor';
import TableHeader from '../components/table-header';
import Vendor from '../components/vendor';

const Vendors = (props) => {
  const [vendors, setVendors] = useState([]);

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
    getVendors();
  }, [getVendors]);

  return (
    <Fragment>
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
              />
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Vendors;
