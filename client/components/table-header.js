import React, {Fragment} from 'react'

const TableHeader = ({headers}) => (
  <thead className='table-header'>
    <tr>
      {headers.map(header => (
        <th className='column lt-gray' key={header}>
          {header}
        </th>
      ))}
    </tr>
  </thead>
)


export default TableHeader
