import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import ItemForm from './item-form'


class AddItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({item: event.target.value})
  }

  async handleSubmit(event){
    event.preventDefault()
    var name = event.target.item.value
    try{
      var item = await axios.post('/api/items', {
        name: name
      })
      this.props.update(item)
    }catch(err){
      console.error(err)
    }
  }
  render(){
    return(
      <ItemForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        item={this.state.item}
      />
    )
  }
}

export default AddItem




