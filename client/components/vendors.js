import React, {Fragment} from 'react'
import ColHeader from './col-header'
import Vendor from './vendor'
import withData from './with-data';

const Vendors = withData(({data, deleteRow}) => (
  <Fragment>
    <div className='col-header row secondary-txt'>
      <ColHeader headers={['Name', 'Email', 'Phone', 'Products']} />
    </div>
    <div className='row-container'>
      {data.map(({id, name, email, phone}) => (
        <Vendor
          key={name + Math.random()}
          className='vendor'
          id={id}
          name={name}
          email={email}
          phone={phone}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  </Fragment>
), 'vendors')

export default Vendors
