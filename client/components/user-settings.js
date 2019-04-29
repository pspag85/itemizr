import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
var axios = require('axios')
import CreateUser from './create-user'
import User from './user'
//import '../css/users.css'



const UserSettings = withRouter(class extends Component {
  state = {
    users: [],
    deletePrivileges: true
  }
  componentDidMount = async () => {
    try {
      const users = await axios.get('/api/users');
      this.setState({
        users: users.data
      })
    } catch(err) {
      console.error(err)
    }
  }
  updateUsers = userData => {
    var users = this.state.users.filter(user => user.id !== userData.id)
    this.setState({ users: [userData, ...users] });
  }
  deleteUser = async id => {
    if (this.props.user.isAdmin) {
      try {
        const deleted = await axios.delete(`/api/users/${id}`)
        if(deleted) {
          const users = this.state.users.filter(user => user.id !== id)
          this.setState({
            users
          })
        }
      } catch(err) {
        console.error(err)
      }
    }else{
      this.setState({
        deletePrivileges: false
      })
    }
  }

  render() {
    const {createUser, deleteUser} = this
    const {users, deletePrivileges} = this.state
    console.log('deletePrivileges', deletePrivileges)
    return (
      <div id='users-container'>
        <CreateUser />
        <h2>My Users</h2>
        {!deletePrivileges ? <h5> Admin privileges required to delete a user </h5> : null}
        {users.length < 1 ? <h2> no Lists </h2>
        :user.map((user, index) => <User key={user.id + user.date}
            id={user.id}
            date={user.date}
            handleClick={viewCurrentUser}
            deleteUser={deleteUser}
          />
        )}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserSettings)
