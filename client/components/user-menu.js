import React, {Component} from 'react'
import Logout from './logout'
import '../css/user-menu.css'

class UserMenu extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    console.log('mounted:      ', this.state.open)
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
      <div id='user-menu'>
        <img id='user-icon' src='/img/person-icon.png' onClick={handleClick} />
        <h4 id='user-name'>{email}</h4>        
        {open ? (
          <div>
            <Logout />
          </div>
        ): null}
      </div>
    )
  }
}

export default UserMenu
