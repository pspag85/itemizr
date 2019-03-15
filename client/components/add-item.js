import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import ItemForm from './item-form'


class AddItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      item: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(event){
    this.setState({clicked:true})
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
      <div>
        <button onClick={this.handleClick}> + </button>
        {
          this.state.clicked ? (
            <ItemForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              item={this.state.item}
            />
            ) : (
              <div>
                <h2> unclicked </h2>
              </div>
            )
          }
      </div>
    )
  }
}

export default AddItem



    // if(a) {return a} else {return b}
    //      return a ? a : b   (**shorthand for return a === true ? a : b)
