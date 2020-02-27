import React, {Fragment, useEffect} from 'react'
import ColHeader from './col-header'
import withListData from './with-list-data';
import ListRow from './list-row';
import useApiRequest from '../api/request';

const Vendors = ({data, updateData, deleteRow}) => {
  const [{ status, response }, makeRequest] = useApiRequest('/api/products')
  console.log('status:  ', status, '\n', 'response:  ', response)

  useEffect(() => {
    makeRequest()
  }, [])

  return (
    <Fragment>
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
