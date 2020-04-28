import React, {Fragment, useEffect} from 'react'
import Header from '../components/header';
import AddVendorModal from '../components/add-vendor-modal';
import ColHeader from '../components/col-header'
import ListRow from '../components/list-row';
import useApiRequest from '../api/request';

const Vendors = ({updateData, deleteRow}) => {
  const [{status, response}, makeRequest] = useApiRequest('/api/vendors')
  useEffect(() => {
    makeRequest()
  }, [])

  return (
    <Fragment>
      <Header title='Vendors' action={<AddVendorModal />} />
      <div className='col-header row secondary-txt'>
        <ColHeader headers={['Name', 'Email', 'Phone', 'Products']} />
      </div>
      <div className='row-container'>
        {response && response.map(({id, name, email, phone}) => (
          <ListRow
            key={id + Math.random()}
            id={id}
            rowData={{name, email, phone}}
            updateData={updateData}
            deleteRow={deleteRow}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Vendors
