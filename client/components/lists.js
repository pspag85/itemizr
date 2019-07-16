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

  componentDidMount() {
    const {loadLists} = this.props
    const lists = loadLists()
  }

  render() {
    const {handleClick} = this
    const {user, lists, createList, deleteList} = this.props
    return (
      <Fragment>
        <UserPage navbar={true}/>
        <CreateList handleClick={createList}/>
        <div id='lists-body' className='wdth-73'>
          <div id='lists-header' className='row'>
            <h3>MY LISTS</h3>
          </div>
          <div className='col-header row'>
            <ColHeader colNum={'three'} headers={['DATE', 'LIST NAME', 'LAST EDITED BY']}/>
          </div>
          <div className='lists-container box-shadow'>
            {lists && lists.map(({id, name, date, lastEditedBy}, index) => (
              <List key={id + date}
                id={id}
                name={name}
                date={date}
                deleteList={deleteList}
                lastEditedBy={lastEditedBy || user.username}
              />
            ))}
          </div>
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
