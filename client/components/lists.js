import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
var axios = require('axios')
import CreateList from './create-list'
import List from './list'
import '../css/lists.css'

const Lists = withRouter(class extends Component {
  state = {
    lists: [],
    deletePrivileges: true
  }
  componentDidMount = async () => {
    try {
      const lists = await axios.get('/api/lists');
      this.setState({
        lists: lists.data
      })
    } catch(err) {
      console.error(err)
    }
  }
  updateLists = listData => {
    var lists = this.state.lists.filter(list => list.id !== listData.id)
    this.setState({ lists: [listData, ...lists] });
  }
  deleteList = async id => {
    if (this.props.user.isAdmin) {
      try {
        const deleted = await axios.delete(`/api/lists/${id}`)
        if(deleted) {
          const lists = this.state.lists.filter(list => list.id !== id)
          this.setState({
            lists
          })
        }
      } catch(err) {
        console.error(err)
      }
    }else{
      this.setState({
        deletePrivileges: false
      })
    }
  }
  saveCurrentList = async () => {
    let currentList
    try {
      const currentItems = await axios.get('/api/items')
      if(currentItems.data) {
        currentList = await axios.put(`/api/lists`, currentItems.data)
      }
    } catch(err) {
      console.error(err)
    }
  }
  clearQuantities = async () => {
    try{
      await axios.put(`/api/items`)
    } catch(err) {
      console.error(err)
    }
  }

  viewCurrentList = () => {
    this.props.history.push('/items')
  }

  createList = async () => {
    this.saveCurrentList()
    try {
      const newList = await axios.post('/api/lists', {
        date: Date.now(),
        items: []
      })
      this.clearQuantities()
      if (newList.data){
        this.updateLists(newList.data)
        this.viewCurrentList()
      }
    } catch(err) {
      console.error(err)
    }
    //save current 'items' table as an array of objects
    //pass that array as req body in post request to api/lists
    //use req body server side to update most recent row in lists table
    //create new row in 'lists' table with current date
    //clear all rows in items table
  }

  render() {
    const {createList, viewCurrentList, deleteList, handleClick} = this
    const {lists, deletePrivileges} = this.state
    console.log('deletePrivileges', deletePrivileges)
    const currentList = lists[0]
    return (
      <div id='lists-container'>
        <CreateList handleClick={createList} />
        <h2>My Lists</h2>
        {!deletePrivileges ? <h5> Admin privileges required to delete a list </h5> : null}
        {lists.length < 1 ? <h2> no Lists </h2>
        :lists.map((list, index) => <List key={list.id + list.date}
            id={list.id}
            date={list.date}
            handleClick={viewCurrentList}
            deleteList={deleteList}
            currentListId={currentList.id}
          />
        )}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Lists)
