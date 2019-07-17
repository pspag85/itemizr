import React from 'react'

const InputCheckbox = ({checked, handleChange}) => (
  <input
    type='checkbox'
    checked={checked}
    onChange={handleChange}
  />
)


export default InputCheckbox
