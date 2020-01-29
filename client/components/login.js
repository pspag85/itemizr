import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../store'
import AuthForm from './auth-form'

const Login = ({handleSubmit}) => (
  <div className='flex h-100-pct'>
    <span className='auth-sidebar vh-100 bg-prpl'></span>
    <div className='auth-wrapper bg-white'>
      <div className='auth-container bg-white box-shadow rnd-crnr'>
        <div className='flex h-100-pct bg-lt-blue space-around'>
          <img src='/img/signup.png' />
          <div className='flex-col mrg-20 ctr-txt'>
            <h1>Welcome Back!</h1>
            <br/>
            <AuthForm handleSubmit={handleSubmit} />
            <div className='flex ctr-items space-around w-200 hz-pdg-10 light-font'>
              <p>Don't have an account?</p>
              <Link to='/signup' className='underline'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  async handleSubmit (evt) {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    const loginThunk = login({email, password})
    try {
      await dispatch(loginThunk)
      ownProps.history.push('/lists')
    } catch(err) {
      console.error(err)
    }
  }
})

export default connect(null, mapDispatchToProps)(Login)

