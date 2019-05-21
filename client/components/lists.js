import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const axios = require('axios')
import CreateList from './create-list'
import List from './list'
import '../css/lists.css'
import {getLists, addList, removeList, getItems, saveList} from '../store'

const Lists = withRouter(class extends Component {
  state = {
    deletePrivileges: this.props.loggedInUser.isAdmin
  }

  componentDidMount = async () => {
    try {
      const lists = await this.props.loadLists()
    } catch(err) {
      console.error(err)
    }
  }

  saveCurrentList = async () => {
    let currentList
    const {loadItems, saveCurrentList} = this.props
    try {
      const currentItems = await loadItems()
      if(currentItems) {
        currentList = await saveCurrentList(currentItems)
      }
    } catch(err) {
      console.error(err)
    }
  }

  viewCurrentList = () => {
    this.props.history.push('/items')
  }

  // clearQuantities = async () => {
  //   try{
  //     await axios.put(`/api/items`)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  render() {
    const {viewCurrentList, handleClick} = this
    const {deletePrivileges} = this.state
    const {lists, createList, deleteList} = this.props
    const currentList = lists[0]
    return (
      <div id='lists-container'>
        <CreateList handleClick={createList}/>
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

const mapStateToProps = state => ({
  loggedInUser: state.user,
  lists: state.lists
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  createList: () => dispatch(addList()),
  deleteList: id => dispatch(removeList(id)),
  loadItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
