import React from 'react';

const OverflowIcon = ({toggleMenu}) => (
  <td className="overflow-icon pointer bg-white" onClick={toggleMenu}>
    <img src="/img/more-vert.png" />
  </td>
);

export default OverflowIcon;
