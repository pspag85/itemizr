import React, {Fragment} from 'react'

const AuthForm = ({handleSubmit, isSignup}) => (
	<form className='flex-col' onSubmit={handleSubmit}>
	  {isSignup && <Fragment>
      <input type='company' name='company' placeholder='Company' />
      <input type='username' name='username' placeholder='Username' />
    </Fragment>}
    <input type='email' name='email' placeholder='Email' />
    <input type='password' name='password' placeholder='Password' />
	  <button type='submit'> Submit </button>
	</form>
)

export default AuthForm
