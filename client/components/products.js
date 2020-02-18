import React, {Fragment} from 'react'
import ColHeader from './col-header'
import Product from './product'
import withData from './with-data';

const Products = withData(({data, deleteRow}) => (
  <Fragment>
    <div className='col-header row secondary-txt'>
      <ColHeader headers={['PRODUCT', 'ON HAND', 'PAR', 'ORDER QTY']} />
    </div>
    <div className='row-container'>
      {data.map(({id, name, onHand, par, orderQty}, index) => (
        <Product
          key={id + name}
          id={id}
          name={name}
          onHand={onHand}
          par={par}
          orderQty={orderQty}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  </Fragment>
), 'products')

export default Products
