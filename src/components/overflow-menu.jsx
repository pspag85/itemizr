import React from 'react';
import DeleteButton from './delete-button';

const OverflowMenu = ({editButton, deleteRow}) => (
  <td className="overflow-menu bg-white box-shadow">
    {editButton}
    <DeleteButton handleClick={deleteRow} />
  </td>
);

export default OverflowMenu;
