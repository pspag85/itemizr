import React, {Fragment, useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Header from '../components/header';
import AddVendorModal from '../components/add-vendor-modal';
import TableHeader from '../components/table-header'
import TableRow from '../components/table-row';

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
      <table className='top-mrg-20'>
        <TableHeader headers={['Name', 'Email', 'Phone', 'Products']} />
        <tbody className='table-body'>
          {vendors && vendors.map(({id, vendor, email, phone}) => (
            <TableRow
              key={id + Math.random()}
              id={id}
              rowData={{vendor, email, phone}}
              updateData={updateVendors}
              deleteRow={deleteVendor}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Vendors
