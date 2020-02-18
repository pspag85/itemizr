import React, {useState} from 'react';

export const useMenuState = () => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => setMenuState(!menuState)
  return {menuState, toggleMenu};
}
