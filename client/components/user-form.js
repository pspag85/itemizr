import React from 'react'

const UserForm = ({handleChange, handleSubmit}) => (
  <div id='product'>
    <form id='add-data' onSubmit={handleSubmit}>
      <label htmlFor='name'> name </label>
      <input type='text' name='name' onChange={handleChange}/>
      <label htmlFor='email'> email </label>
      <input type='text' name='email' onChange={handleChange}/>
      <label htmlFor='isAdmin'> isAdmin </label>
      <input type='text' name='isAdmin' onChange={handleChange}/>
      <button type='submit'> + </button>
    </form>
  </div>
)

export default UserForm