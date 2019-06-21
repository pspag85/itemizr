import React from 'react'

const ColHeader = ({colNum, headers}) => headers.map(header => (
  <div className={`${colNum} column`} key={header}>
    <h4>{header}</h4>
  </div>
))

export default ColHeader
