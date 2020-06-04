import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup} from '../store';
import AuthForm from '../components/auth-form';

const Signup = ({handleSubmit}) => (
  <div className="flex h-100-pct">
    <span className="auth-sidebar vh-100 bg-prpl"></span>
    <div className="auth-wrapper bg-white">
      <div className="auth-container bg-white box-shadow">
        <div className="flex h-100-pct bg-lt-blue space-around">
          <img src="/img/signup.png" />
          <div className="flex-col top-mrg-10 ctr-txt content-box">
            <h2>Welcome Back!</h2>
            <br />
            <AuthForm handleSubmit={handleSubmit} isSignup={true} />
            {/* {<p ref={emailRef}></p>} */}
            <div className="flex ctr-items space-around w-200 hz-pdg-10 light-font">
              <p>Already have an account?</p>
              <Link to="/login" className="underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, {history}) => ({
  async handleSubmit(evt) {
    evt.preventDefault();
    const business = evt.target.business.value;
    const username = evt.target.username.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    const signupThunk = signup({
      business,
      username,
      email,
      password,
      isAdmin: true,
    });
    try {
      const user = await dispatch(signupThunk);
      const path = !user ? '/login' : '/products';
      history.push(`${path}`);
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(null, mapDispatchToProps)(Signup);
