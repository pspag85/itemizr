import React from 'react'

const ColHeader = ({headers}) => headers.map(header => (
  <div className={`column light-font`} key={header}>
    <h4>{header}</h4>
  </div>
))

export default ColHeader
