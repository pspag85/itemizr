import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import CreateList from './create-list'
import List from './list'


class Lists extends Component{
  constructor(){
    super()
    this.state = {
      lists: [],
    }
    this.updateLists = this.updateLists.bind(this)
  }
  updateLists(listData){
    var lists = this.state.lists.filter(list => list.id !== listData.id)
    this.setState({ lists: [...lists, listData]})
  }
  async componentDidMount() {
    try {
      const res = await axios.get('/api/lists');
      this.setState({lists: res.data});
    } catch(err) {
      console.error(err)
    }
  }

  render(){
    const lists = this.state.lists
    return(
      <div id='lists-container'>
        <CreateList handleClick={this.updateLists} />
        {lists.length < 1 ? <h2> no lists </h2>
        :lists.map((list, index) => <List
            id={list.id}
            date={list.date}
          />
        )}
      </div>
    )
  }
}

export default Lists
