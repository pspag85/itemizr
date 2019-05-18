import React from 'react'

const AuthForm = props => (
	<form onSubmit={props.handleSubmit}>
	  <input type='email' name='email'/>
	  <input type='password' name='password' />
	  <button type='submit'> submit </button>
	</form>
)

export default AuthForm
