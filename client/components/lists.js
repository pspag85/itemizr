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
    this.saveCurrentList = this.saveCurrentList.bind(this)
    this.createList = this.createList.bind(this)
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
    //create new row in 'lists' table with current date
    //clear all rows in items table

  async saveCurrentList(){
    let currentList
    try{
      const res = await axios.get('/api/items')    //save current 'items' table as an array of objects
      if(res.data) {
        currentList = await axios.post('/api/lists', res.data)    //pass that array as req body in post request to api/lists
        this.updateLists(currentList.data)
      }
    } catch(err){
      console.error(err)
    }
  }

  async clearQuantities(){
    try{
      await axios.put('/api/items')
    } catch(err){
      console.error(err)
    }
  }

  async createList(){
    this.saveCurrentList()
    let date = Date.now()
    try{
      const res = await axios.post('/api/lists', {
        date: date,
        items: []
      })
      this.updateLists(res.data)
    } catch(err){
      console.error(err)
    }
  }

  render(){
    const lists = this.state.lists
    return(
      <div id='lists-container'>
        <CreateList handleClick={this.createList} />
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
