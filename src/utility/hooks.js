import React, {useState} from 'react';
import {createInitialState} from './helpers';

export const useToggleState = () => {
  const [toggleState, setMenuState] = useState({id: null, isOpen: false});
  const toggleMenu = (id) => setMenuState({id, isOpen: !toggleState.isOpen});

  return {toggleState, toggleMenu};
};

export const useFormState = (model, currentState) => {
  const initialState = !currentState ? createInitialState(model) : currentState;
  const [formState, setFormState] = useState(initialState);

  return {formState, setFormState};
};
