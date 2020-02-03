import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserBar from './user-bar'
import List from './list'
import {getLists, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Lists = withRouter(({user, loadLists, lists, deleteList}) => {

  useEffect(() => {
    loadLists()
  }, [])

  return (
    <Fragment>
      <UserBar showNav={true}/>
      <div id='lists-page' className='page-pdg'>
        <div className='tp-mrg-20 font-8'>
          <h4>Search</h4>
        </div>
        {lists.length < 1 || !Array.isArray(lists) ? <h4>Start by creating your first list</h4>
        : <Fragment>
            <div className='row-container bg-white'>
              {lists.map(({id, name, date, lastEditedBy}, index) => (
                <List key={Math.random() + id}
                  id={id}
                  name={name}
                  deleteList={deleteList}
                />
              ))}
            </div>
          </Fragment>
        }
      </div>
    </Fragment>
  )
})

const mapStateToProps = ({user, lists}) => ({user, lists})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadLists: () => dispatch(getLists()),
  createList: () => dispatch(addList()),
  deleteList: id => dispatch(removeList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
