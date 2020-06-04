import React, {Fragment} from 'react';

const AuthForm = ({handleSubmit, isSignup}) => (
  <form className="auth-form flex-col" onSubmit={handleSubmit}>
    {isSignup && (
      <Fragment>
        <input type="business" name="business" placeholder="Company" />
        <input type="username" name="username" placeholder="Username" />
      </Fragment>
    )}
    <input type="email" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit" className="action-btn white bg-drk-blue">
      {' '}
      {isSignup ? 'Sign up' : 'Log in'}{' '}
    </button>
  </form>
);

export default AuthForm;
