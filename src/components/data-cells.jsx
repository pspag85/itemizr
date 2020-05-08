import React from 'react';

const DataCells = ({data}) => {
  const cells = Object.keys(data);
  return cells.map((cell) => <td key={cell + Math.random()}>{data[cell]}</td>);
};

export default DataCells;
