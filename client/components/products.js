import React, {Fragment} from 'react'
import ColHeader from './col-header'
import withListData from './with-list-data';
import ListRow from './list-row';

const Products = withListData(({data, model, updateData, deleteRow}) => {
  return (
  <Fragment>
    <div className='col-header row secondary-txt'>
      <ColHeader headers={['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand', 'Qty']} />
    </div>
    <div className='row-container'>
      {data.map(({id, name, category, vendor, unit, par, onHand, orderQty}) => (
        <ListRow
          key={id + Math.random()}
          id={id}
          model={model}
          rowData={{name, productNumber: id, category, vendor, unit, par, onHand, orderQty}}
          updateData={updateData}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  </Fragment>
)}, 'products')

export default Products
