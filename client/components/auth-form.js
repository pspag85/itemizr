import React from 'react'

var AuthForm = function (props){
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='email' name='email'/>
      <input type='password' name='password' />
      <button type='submit'> submit </button>
   </form>
  )
}

export default AuthForm
