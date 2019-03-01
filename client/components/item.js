import React,{Component} from 'react'
var axios = require('axios')



class Item extends Component{
  constructor(){
    super()
    this.state = {
      item: '',
      printed: ''
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
      this.setState({printed:name})
    }catch(err){
      console.error(err)
    }
  }
  render(){
    return(
      <div id='list'>
        <form id='add_item' onSubmit={this.handleSubmit}>
          <input type='text' name='item' value={this.state.item} onChange = {this.handleChange}/>
          <button type='submit'> + </button>
        </form>
        <div>
          <h2>{this.state.printed}</h2>
        </div>

      </div>
    )
  }
}

export default Item




