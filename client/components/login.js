import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../store'
import AuthForm from './auth-form'

const Login = ({handleSubmit}) => (
  <div>
    <h1>Login:</h1>
    <div>
      <h2>Don't have an account?</h2>
      <Link to='/signup'>Signup</Link>
    </div>
    <br/>
    <AuthForm handleSubmit={handleSubmit} />
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

