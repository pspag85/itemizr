import React from 'react';

const DataCells = ({data}) => {
  const cells = Object.keys(data);
  return cells.map((cell) => (
    <td
      key={cell + Math.random()}
      className={data[cell] === '' ? 'secondary-txt' : ''}
    >
      {data[cell] === '' ? '--' : data[cell]}
    </td>
  ));
};

export default DataCells;
