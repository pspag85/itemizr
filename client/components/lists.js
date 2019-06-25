import React, {Component, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
const axios = require('axios')
import UserPage from './user-page'
import CreateList from './create-list'
import List from './list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Lists = withRouter(class extends Component {

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
  //     await lists.put(`/api/items`)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  render() {
    const {handleClick} = this
    const {user, lists, createList} = this.props
    return (
      <Fragment>
        <UserPage navbar={true}/>
        <div id='lists-container'>
          <CreateList handleClick={createList}/>
          <div id='lists-header' className='row'>
            <h3>MY LISTS</h3>
            <div></div>
            <Link to='/lists/edit' >
              <h4 className='edit-btn bg-blue'>EDIT</h4>
            </Link>
          </div>
          <div className='col-header row'>
            <ColHeader colNum={'three'} headers={['DATE', 'LIST NAME', 'LAST EDITED BY']}/>
          </div>
          {!Array.isArray(lists) ? null
          :lists.map(({id, name, date, lastEditedBy}, index) => (
            <List key={id + date}
              id={id}
              name={name}
              date={date}
              lastEditedBy={lastEditedBy}
            />
          ))}
        </div>
      </Fragment>
    )
  }
})

const mapStateToProps = ({user, lists}) => ({user, lists})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  createList: () => dispatch(addList()),
  deleteList: id => dispatch(removeList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
