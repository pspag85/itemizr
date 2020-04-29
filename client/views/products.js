import React, {Fragment, useEffect} from 'react'
import ListHeader from '../components/list-header'
import ListRow from '../components/list-row';
import useApiRequest from '../api/request';

const Products = ({updateData, deleteRow}) => {
  const [{ status, response }, makeRequest] = useApiRequest('/api/products')
  useEffect(() => {
    makeRequest()
  }, [])

  return (
    <Fragment>
      <div className='list-header row secondary-txt'>
        <ListHeader headers={['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand', 'Qty']} />
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
