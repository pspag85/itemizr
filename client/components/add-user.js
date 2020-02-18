import React, {Component} from 'react'
import {connect} from 'react-redux'
const axios = require('axios')
import UserForm from './user-form'
import {randomPasswordGen} from '../utility/helpers'
import {addUser} from '../store'

class AddUser extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({open: true})
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {name, email, isAdmin} = event.target
    //const password = randomPasswordGen() ==> //live
    try{
      const user = await this.props.createUser({
        name: name.value,
        date: Date.now(),
        email: email.value,
        password: 'fakepw',
        isAdmin: isAdmin.value
      })
      this.setState({open: false})
    }catch(err){
      console.error(err)
    }
  }

  render(){
    return(
      <div>
        {this.state.open ? (
          <UserForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ):(
          <div>
            <button id='create-user'
              onClick={this.handleClick}>
              +
            </button>
            <h3> Create User </h3>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: userData => dispatch(addUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)