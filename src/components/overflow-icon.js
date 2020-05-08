import React from 'react'

const OverflowIcon = ({toggleMenu}) => (
  <td className='column pointer bg-white' onClick={toggleMenu}>
    <img src='/img/more-vert.png' />
  </td>
)

export default OverflowIcon
