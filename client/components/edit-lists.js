import React, {Component} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
const axios = require('axios')
import UserPage from './user-page'
import CreateList from './create-list'
import EditList from './edit-list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/edit-lists.css'

const EditLists = withRouter(class extends Component {

  async componentDidMount() {
    const {loadLists} = this.props
    try {
      const lists = await loadLists()
    } catch(err) {
      console.error(err)
    }
  }

  // saveCurrentList = async () => {
  //   let currentList
  //   const {loadItems, saveCurrentList} = this.props
  //   try {
  //     const currentItems = await loadItems()
  //     if(currentItems) {
  //       currentList = await saveCurrentList(currentItems)
  //     }
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  // clearQuantities = async () => {
  //   try{
  //     await axios.put(`/api/items`)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  render() {
    const {handleClick} = this
    const {user, lists, createList, deleteList} = this.props
    return (
      <div id='edit-lists-container'>
        <UserPage />
        <div id='edit-lists-header' className='row'>
          <h3>MY LISTS</h3>
          <div></div>
          <Link to='/lists'>
            <h4>&times;</h4>
          </Link>
        </div>      
        <div className='col-header row'>
          <ColHeader headers={['LIST NAME']}/>
        </div>
        {!user.isAdmin ? <h5> Admin privileges required to delete a list </h5> : null}
        {!Array.isArray(lists) ? null
        :lists.map(({id, name}, index) => <EditList key={id + name}
            id={id}
            name={name}
            deleteList={deleteList}
          />
        )}
      </div>
    )
  }
})

const mapStateToProps = ({user, lists}) => ({user, lists})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  createList: () => dispatch(addList()),
  deleteList: id => dispatch(removeList(id)),
  loadItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditLists)
