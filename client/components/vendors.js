import React, {Fragment} from 'react'
import ColHeader from './col-header'
import ListRow from './list-row'
import withListData from './with-list-data';

const Vendors = withListData(({data, deleteRow}) => (
  <Fragment>
    <div className='col-header row secondary-txt'>
      <ColHeader headers={['Name', 'Email', 'Phone', 'Products']} />
    </div>
    <div className='row-container'>
      {data.map(({id, name, email, phone}) => (
        <ListRow
          key={id + Math.random()}
          id={id}
          rowData={[name, email, phone]}
          deleteRow={deleteRow}
        />
      ))}
    </div>
  </Fragment>
), 'vendors')

export default Vendors
