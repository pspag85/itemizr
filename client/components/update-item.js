import React,{Component} from 'react'
const axios = require('axios') //API libary ajax => http://www.aaronsw.com/weblog/ajaxhistory
const $ = require('jquery')

class UpdateItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      id:       this.props.id,
      name:     this.props.name,
      onHand:   this.props.onHand,
      par:      this.props.par,
      orderQty: this.props.orderQty
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event){
    event.preventDefault()
    const id = this.state.id
    const inputName = this.props.input
    const value = event.target.querySelector('input').value //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    const itemData = {}
    itemData[inputName] = value
    try{
      const item = await axios.put(`/api/items/${id}`, itemData)
      if(item){
        this.props.update(item.data)
        $(() => {$('input').blur()})
      }
    }catch(err){
      console.error(err)
    }
  }

  render(){
    const name = this.props.input ? this.props.input : ''
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
         <input
            type='text' name={name}
            value={this.state[name]}
            onChange={this.handleChange}
          />
       </form>
      </div>
    )
  }
}

export default UpdateItem