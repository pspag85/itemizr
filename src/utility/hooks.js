import React, {useState} from 'react';

export const useOverflowState = () => {
  const initialState = {id: null, isOpen: false};
  const [overflowState, setOverflowState] = useState(initialState);

  const openOverflow = (id) => setOverflowState({id, isOpen: true});
  const closeOverflow = () => setOverflowState(initialState);

  const toggleOverflow = (id) => {
    if (overflowState.isOpen) {
      closeOverflow();
    } else {
      openOverflow(id);
    }
  };

  return {overflowState, openOverflow, closeOverflow, toggleOverflow};
};
