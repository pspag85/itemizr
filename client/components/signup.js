import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../store'
import AuthForm from './auth-form'
import $ from 'jquery'

const Signup = props => {
  const {handleSubmit} = props

  return (
    <div>
      <h1>Signup:</h1>
      <div>
        <h2 id='signupHeader'>Already have an account?</h2>
        <Link to='/login'>Login</Link>
      </div>
      <br/>
      <AuthForm handleSubmit={handleSubmit} />
    </div>
  )
}

const duplicateEmailHandler = () => {
  $('#signupHeader').text('user alerady exists!')
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      const signupThunk = signup({email, password})
      try {
        await dispatch(signupThunk)
        ownProps.history.push('/lists')
      } catch(err) {
        duplicateEmailHandler()
        console.error(err)
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)

