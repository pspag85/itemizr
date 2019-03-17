import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
const $ = require('jquery')

class UpdateName extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      id:   this.props.id
    }
    this.container = React.createRef()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  blurInput() {
        document.getElementById('name-form').blur()

    document.getElementById('name-form').blur()
  }

  handleChange(event){
    var name = event.target.value
    this.setState({name: name})
  }

  async handleSubmit(event){
    event.preventDefault()
    var name = event.target.name.value
    var id = this.state.id
    try{
      var item = await axios.put(`/api/items/${id}`, {
        name: name
      })
      if(item){
        this.props.update(item.data)
        $(() => {
          $('input').blur()
      })
      }
    }catch(err){
      console.error(err)
    }
  }
  render(){
    console.log('this state name', this.state.name)
    var name = this.state.name ? this.state.name : ''
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
         <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
       </form>
      </div>
    )
  }
}

export default UpdateName



    // if(a) {return a} else {return b}
    //      return a ? a : b   (**shorthand for return a === true ? a : b)
