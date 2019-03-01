import React,{Component} from 'react'




class List extends Component{
  constructor(){
    super()
    this.state = {
      item: 'apples'
    }
  }

  render(){
var item = this.state.item;
    return(
      <div id='list'>
        <h2 id='item'> {this.state.item}
        </h2>
      </div>
    )
  }
}

export default List




