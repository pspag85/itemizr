import React, {Component} from 'react'
import {connect} from 'react-redux'
import Logout from './logout'
import '../css/user-menu.css'

class UserMenu extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    const open = !(this.state.open)
    this.setState({
      open
    })
  }

  render() {
    const {handleClick} = this
    const {open} = this.state
    const {email} = this.props.user
    return (
      <div id='user-menu' className='pointer' onClick={handleClick}>
        <img id='user-icon' src='/img/person-icon.png' />
        <h4 id='user-name'>{email}</h4>  
        {open ? (
          <div id='user-dd-menu' className='bg-purple'>
            <Logout />
          </div>
        ): null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserMenu)
