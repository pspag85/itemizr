import React from 'react'

const ColHeader = ({num, headers}) => headers.map(header => (
  <div className={`${num} column`} key={header}>
    <h4>{header}</h4>
  </div>
))

export default ColHeader
