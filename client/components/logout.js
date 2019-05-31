import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'

const Logout = props => (
  <div id='logout-btn-container'>
    <button className='logout-btn' onClick={props.handleClick}>
      Logout {props.name}
    </button>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick () {
      try{
        await dispatch(logout())
      } catch(err) {
        console.error(err)
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
