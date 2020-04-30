import React, {Fragment, useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Header from '../components/header';
import AddVendorModal from '../components/add-vendor-modal';
import ListHeader from '../components/list-header'
import ListRow from '../components/list-row';

const Vendors = (props) => {
  const [vendors, setVendors] = useState([])

  const getVendors = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/vendors')
      setVendors(data)
    } catch(err) {
      console.error(err)
    }
  }, [setVendors])

  const insertVendor = newVendor => setVendors([...vendors, newVendor])
  const updateVendors = vendorData => {
    const updatedVendors = vendors.map(vendor => {
      return vendor.id === vendorData.id ? vendorData : vendor
    })
    setVendors(updatedVendors)
  }

  const deleteVendor = async id => {
    try {
      await axios.delete(`/api/vendors/${id}`)
    } catch(err) {
      console.error(err)
    } finally {
      const updatedVendors = vendors.filter(vendor => vendor.id !== id)
      setVendors(updatedVendors)
    }
  }

  useEffect(() => {
    getVendors()
  }, [getVendors])

  return (
    <Fragment>
      <Header title='Vendors' action={<AddVendorModal insertVendor={insertVendor} />} />
      <div className='top-mrg-20'>
        <ListHeader headers={['Name', 'Email', 'Phone', 'Products']} />
        <div className='row-container'>
          {vendors && vendors.map(({id, vendor, email, phone}) => (
            <ListRow
              key={id + Math.random()}
              id={id}
              rowData={{vendor, email, phone}}
              updateData={updateVendors}
              deleteRow={deleteVendor}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Vendors
