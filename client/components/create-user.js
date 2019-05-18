import React, {Component} from 'react'
const axios = require('axios')
import UserForm from './user-form'
const {randomPasswordGen} = require('../utils')
// import '../css/add-item.css'

class CreateUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(){
    this.setState({open: true})
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event){
    event.preventDefault()
    const {name, email, isAdmin} = event.target
    const password = randomPasswordGen()
    try{
      const user = await axios.post('/api/users', {
        name: name.value,
        date: Date.now(),
        email: email.value,
        password: password.value,
        isAdmin: isAdmin.value
      })
      this.props.update(user.data)
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

export default CreateUser



    // if(a) {return a} else {return b}
    //      return a ? a : b   (**shorthand for return a === true ? a : b)
