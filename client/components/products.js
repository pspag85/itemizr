import React, {Fragment, useEffect} from 'react'
import ColHeader from './col-header'
import withListData from './with-list-data';
import ListRow from './list-row';
import useApiRequest from '../api/request';

const Products = ({data, updateData, deleteRow}) => {
  const [{ status, response }, makeRequest] = useApiRequest('/api/products')
  console.log('status:  ', status, '\n', 'response:  ', response)

  useEffect(() => {
    makeRequest()
  }, [])

  return (
    <Fragment>
      <div className='col-header row secondary-txt'>
        <ColHeader headers={['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand', 'Qty']} />
      </div>
      <div className='row-container'>
        {response && response.map(({id, name, category, vendor, unit, par, onHand, orderQty}) => (
          <ListRow
            key={id + Math.random()}
            id={id}
            rowData={{name, productNumber: id, category, vendor, unit, par, onHand, orderQty}}
            updateData={updateData}
            deleteRow={deleteRow}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Products
