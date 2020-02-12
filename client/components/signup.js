import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../store'
import AuthForm from './auth-form'

const emailRef = React.createRef()

const Signup = ({handleSubmit}) => (
  <div className='flex h-100-pct'>
    <span className='auth-sidebar vh-100 bg-prpl'></span>
    <div className='auth-wrapper bg-white'>
      <div className='auth-container bg-white box-shadow rnd-crnr'>
        <div className='flex h-100-pct bg-lt-blue space-around'>
          <img src='/img/signup.png' />
          <div className='flex-col tp-mrg-10 ctr-txt content-box'>
            <h2>Welcome Back!</h2>
            <br />
            <AuthForm handleSubmit={handleSubmit} isSignup={true}/>
            <p ref={emailRef} className='mrg-0'></p>
            <div className='flex ctr-items space-around w-200 hz-pdg-10 light-font'>
              <p>Already have an account?</p>
              <Link to='/login' className='underline'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const duplicateEmailHandler = () => {
  emailRef.current.textContent = 'Email already in use'
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  async handleSubmit (evt) {
    evt.preventDefault()
    duplicateEmailHandler()
    const business = evt.target.business.value
    const username = evt.target.username.value
    const email = evt.target.email.value
    const password = evt.target.password.value
    const signupThunk = signup({
      business,
      username,
      email,
      password,
      isAdmin: true
    })
    try {
      await dispatch(signupThunk)
      ownProps.history.push('/products')
    } catch(err) {
      console.error(err)
    }
  }
})

export default connect(null, mapDispatchToProps)(Signup)
