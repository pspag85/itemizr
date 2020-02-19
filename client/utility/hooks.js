import React, {useState} from 'react';

export const useToggleState = () => {
  const [toggleState, setMenuState] = useState(false)
  const toggleMenu = () => setMenuState(!toggleState)
  return {toggleState, toggleMenu};
}
