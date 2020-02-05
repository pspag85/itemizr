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
    const {username} = this.props.user
    return (
      <div id='user-menu' className='pointer' onClick={handleClick}>
        <div id='user-menu--btn'>
          <h4>{username}</h4>
        </div>
        {open ? (
          <div id='user-menu--dd' className='bg-blue'>
            <Logout />
          </div>
        ): null}
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(UserMenu)
