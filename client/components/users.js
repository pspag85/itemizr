import React, {Component} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
const axios = require('axios')
import CreateUser from './create-user'
import ColHeaders from './col-headers'
import User from './user'
import {getUsers} from '../store'

const Users = withRouter(class extends Component {
  state = {
    users: [],
    deletePrivileges: true
  }

  componentDidMount = async () => {
    const {loggedInUser, history, loadUsers} = this.props
    if(!loggedInUser.id) {
      history.push('/')
    }
    try {
      const users = await loadUsers()
      this.setState({
        users: users.data
      })
    } catch(err) {
      console.error(err)
    }
  }

  updateUsers = userData => {
    const users = this.state.users.filter(user => user.id !== userData.id)
    this.setState({ users: [...users, userData] })
  }

  deleteUser = async id => {
    if(this.props.loggedInUser.isAdmin) {
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
    } else {
      this.setState({
        deletePrivileges: false
      })
    }
  }

  render() {
    const {updateUsers, deleteUser} = this
    const {users, deletePrivileges} = this.state
    return (
      <div id='users-container'>
        <Link to='/lists'>Back To Lists</Link>
        <CreateUser update={updateUsers} />
        <h2>My Users</h2>
         <ColHeaders
          col_1={'Date'}
          col_2={'Name'}
          col_3={'Email'}
          col_4={'isAdmin'}
         />
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

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  users: state.users
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, null)(Users)
