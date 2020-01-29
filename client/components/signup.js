import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../store'
import AuthForm from './auth-form'

const emailRef = React.createRef()

const Signup = props => {
  const {handleSubmit} = props

  return (
    <Fragment>
      <div className='auth-sidebar'></div>
      <div className='auth-wrapper bg-white vh-100'>
        <div className='auth-container bg-lt-blue'>
          <h1>Signup:</h1>
          <div>
            <h2>Already have an account?</h2>
            <Link to='/login'>Login</Link>
          </div>
          <br/>
          <AuthForm handleSubmit={handleSubmit} isSignup={true} />
          <h4 ref={emailRef}></h4>
        </div>
      </div>
    </Fragment>
  )
}

const duplicateEmailHandler = () => {
  emailRef.current.textContent = 'Email already in use'
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  async handleSubmit (evt) {
    evt.preventDefault()
    duplicateEmailHandler()
    const company = evt.target.company.value
    const username = evt.target.username.value
    const email = evt.target.email.value
    const password = evt.target.password.value
    const signupThunk = signup({
      company,
      username,
      email,
      password,
      isAdmin: true
    })
    try {
      await dispatch(signupThunk)
      ownProps.history.push('/lists')
    } catch(err) {
      console.error(err)
    }
  }
})

export default connect(null, mapDispatchToProps)(Signup)
