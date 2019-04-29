import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import UserForm from './user-form'
var {randomPasswordGen} = require('../utils')
// import '../css/add-item.css'

class CreateUser extends Component{
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
    var name = event.target.name.value
    var email = event.target.email.value
    var isAdmin = event.target.isAdmin.value
    var password = randomPasswordGen()
    try{
      var user = await axios.post('/api/users', {
        name,
        date: Date.now(),
        email,
        password,
        isAdmin
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
