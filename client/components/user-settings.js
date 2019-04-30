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
    if(!this.props.user.id) {
      console.log('no user')
      this.props.history.push('/')
    }
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
    this.setState({ users: [...users, userData] });
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
    const {createUser, updateUsers, deleteUser} = this
    const {users, deletePrivileges} = this.state
    return (
      <div id='users-container'>
        <CreateUser update={updateUsers} />
        <h2>My Users</h2>
        {!deletePrivileges ? <h5> Admin privileges required to delete a user </h5> : null}
        {users.length < 1 ? <h2> No Users </h2>
        :users.map((user, index) => <User key={user.id + user.date}
            id={user.id}
            date={user.date}
            name={user.name}
            email={user.email}
            isAdmin={user.isAdmin}
            remove={deleteUser}
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
