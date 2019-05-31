import React from 'react'

const UserForm = props => (
  <div id='items'>
    <form id='add-item' onSubmit={props.handleSubmit}>
      <label htmlFor='name'> name </label>
      <input type='text' name='name' onChange={props.handleChange}/>
      <label htmlFor='email'> email </label>
      <input type='text' name='email' onChange={props.handleChange}/>
      <label htmlFor='isAdmin'> isAdmin </label>
      <input type='text' name='isAdmin' onChange={props.handleChange}/>
      <button type='submit'> + </button>
    </form>
  </div>
)

export default UserForm