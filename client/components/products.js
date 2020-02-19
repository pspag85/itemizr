import React, {Fragment} from 'react'
import ColHeader from './col-header'
import withListData from './with-list-data';
import ListRow from './list-row';

const Products = withListData(({data, deleteRow}) => (
  <Fragment>
    <div className='col-header row secondary-txt'>
      <ColHeader headers={['PRODUCT', 'ON HAND', 'PAR', 'ORDER QTY']} />
    </div>
    <div className='row-container'>
      {data.map(({id, name, onHand, par, orderQty}, index) => (
        <ListRow
          key={id + Math.random()}
          id={id}
          rowData={[name, onHand, par, orderQty]}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  </Fragment>
), 'products')

export default Products
