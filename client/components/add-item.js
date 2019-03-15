import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import ItemForm from './item-form'


class AddItem extends Component{
  constructor(props){
    super(props)
    console.log('props:  ', props)
    this.state = {
      open: false,
      item: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(){
    this.setState({open: true})
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
      this.setState({item: '', open: false})
    }catch(err){
      console.error(err)
    }
  }
  render(){
    return(
      <div>
        {this.state.open ? (
          <ItemForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            item={this.state.item}
          />
        ):(
          <button
            onClick={this.handleClick}>
            +
          </button>  
        )}
      </div>
    )
  }
}

export default AddItem



    // if(a) {return a} else {return b}
    //      return a ? a : b   (**shorthand for return a === true ? a : b)
