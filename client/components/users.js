import React, {Component} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import NavCart from './nav-cart'
import AddUser from './add-user'
import ColHeader from './col-header'
import User from './user'
import {getUsers, removeUser} from '../store'

const Users = withRouter(class extends Component {
  state = {
    deletePrivileges: this.props.user.isAdmin
  }

  componentDidMount = async () => {
    const {user, history, loadUsers} = this.props
    if(!user.id) history.push('/')
    loadUsers()
  }

  render() {
    const {deletePrivileges} = this.state
    const {users, deleteUser} = this.props
    return (
      <div id='users-container'>
        <NavCart />
        <Link to='/lists'>Back To Lists</Link>
        <AddUser />
        <h2>My Users</h2>
        <div className='col-header row'>
          <ColHeader headers={['Date', 'Name', 'Email', 'isAdmin']} />
        </div>
        {!deletePrivileges ? <h5> Admin privileges required to delete a user </h5> : null}
        {users.length < 1 ? <h2> No Users </h2>
        :users.map(({id, date, name, email, isAdmin}, index) => <User
            key={id + date}
            id={id}
            date={date}
            name={name}
            email={email}
            isAdmin={isAdmin}
            remove={deleteUser}
          />
        )}
      </div>
    )
  }
})

const mapStateToProps = ({user, users}) => ({user, users})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUsers: () => dispatch(getUsers()),
  deleteUser: id => dispatch(removeUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
