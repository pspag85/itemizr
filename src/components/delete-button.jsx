import React from 'react';

const DeleteButton = ({handleClick}) => (
  <button className="custom-btn" onClick={handleClick}>
    <img src="/img/delete.png" />
    <h4 className="delete-txt">Delete</h4>
  </button>
);

export default DeleteButton;
