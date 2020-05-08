import React from 'react';
import DeleteButton from './delete-button';

const OverflowMenu = ({editButton, deleteRow}) => (
  <td className="row-menu bg-white box-shadow">
    {editButton}
    <DeleteButton handleClick={deleteRow} />
  </td>
);

export default OverflowMenu;
