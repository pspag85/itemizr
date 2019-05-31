import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'

const Logout = props => (
  <div>
    <button className='logoutBtn' onClick={props.handleClick}>
      Logout {props.name}
    </button>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick () {
      try{
        await dispatch(logout())
        ownProps.history.push('/')
      } catch(err) {
        console.error(err)
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
