import React, {Component, Fragment} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const axios = require('axios')
import UserPage from './user-page'
import CreateList from './create-list'
import List from './list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Lists = withRouter(class extends Component {

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
    const {user, lists, createList} = this.props
    const currentList = lists[0]
    return (
      <Fragment>
        <UserPage />
        <div id='lists-container'>
          <CreateList handleClick={createList}/>
          <h3 id='lists-header'>MY LISTS</h3>
          <div className='col-header row'>
            <ColHeader num={'three'} headers={['DATE', 'LIST NAME', 'LAST EDITED BY']}/>
          </div>
          {!user.isAdmin ? <h5> Admin privileges required to delete a list </h5> : null}
          {lists.length < 1 ? null
          :lists.map(({id, name, date}, index) => <List key={id + date}
              id={id}
              name={name}
              date={date}
              handleClick={viewCurrentList}
              currentListId={currentList.id}
            />
          )}
        </div>
      </Fragment>
    )
  }
})

const mapStateToProps = state => ({
  user: state.user,
  lists: state.lists
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  createList: () => dispatch(addList()),
  deleteList: id => dispatch(removeList(id)),
  loadItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
