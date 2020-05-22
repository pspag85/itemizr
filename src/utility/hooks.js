import React, {useState} from 'react';

export const useToggleState = () => {
  const [toggleState, setMenuState] = useState({id: null, isOpen: false});
  const toggleMenu = (id) => setMenuState({id, isOpen: !toggleState.isOpen});

  return {toggleState, toggleMenu};
};
