import React, {Fragment, useState, useEffect} from 'react'
import ColHeader from '../components/col-header'
import ListRow from '../components/list-row';
import AddDataButton from '../components/add-data-button';
import useApiRequest from '../api/request';

const Vendors = ({updateData, deleteRow}) => {
  const [{status, response}, makeRequest] = useApiRequest('/api/vendors')
  useEffect(() => {
    makeRequest()
  }, [])

  return (
    <Fragment>
      <div className='page-pdg'>
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
      </div>
    </Fragment>
  )
}

export default Vendors
