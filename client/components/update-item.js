import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
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
    console.log('event target log', event.target)
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event){
    event.preventDefault()
    var name = 'onHand'
    var id = this.state.id
    console.log('SUBMIT LOG log' ,event.target.value)
    var itemData = {}
    itemData[name] = event.target.value
    // try{
    //   var item = await axios.put(`/api/items/${id}`, itemData )
    //   if(item){
    //     this.props.update(item.data)
    //     $(() => {
    //       $('input').blur()
    //   })
    //   }
    // }catch(err){
    //   console.error(err)
    // }
  }
  render(){
    console.log('this state name', this.props.input)
    var name = this.props.input ? this.props.input : ''
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
         <input type='text' name={name} value={this.state[name]} onChange={this.handleChange} />
       </form>
      </div>
    )
  }
}

export default UpdateItem



    // if(a) {return a} else {return b}
    //      return a ? a : b   (**shorthand for return a === true ? a : b)
