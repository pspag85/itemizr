import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/header';
import AddVendorModal from '../components/add-vendor-modal';
import ListHeader from '../components/list-header'
import ListRow from '../components/list-row';

const Vendors = (props) => {
  const [vendors, setVendors] = useState([])

  const getVendors = async () => {
    try {
      const {data} = await axios.get('/api/vendors')
      return data
    } catch(err) {
      console.error(err)
    }
  }

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
    let isSubscribed = true
    getVendors().then(vendors => {
      if(isSubscribed) {
        setVendors(vendors)
      }
    })
    return () => isSubscribed = false
  }, []) // put getVendors in the array to load when modal closes, but still need to stop the fetching once that happens

  return (
    <Fragment>
      <Header title='Vendors' action={<AddVendorModal />} />
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
