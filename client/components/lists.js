import React, {useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserBar from './user-bar'
import CreateListButton from './create-list-button'
import List from './list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Lists = withRouter(({user, loadLists, lists, deleteList}) => {

  useEffect(() => {
    loadLists()
  }, [])

  return (
    <Fragment>
      <UserBar showNav={true}/>
      <CreateListButton />
      <div id='lists-page' className='page-pdg'>
        <div className='header row font-20'>
          <h3>MY LISTS</h3>
        </div>
        {lists.length < 1 || !Array.isArray(lists) ? <h4>Start by creating your first list</h4>
        : <Fragment>
            <div className='col-header row secondary-txt'>
              <ColHeader headers={['DATE  \u{2191}', 'LIST NAME  \u{2191}', 'LAST EDITED BY \u{2191}']}/>
            </div>
            <div className='row-container bg-white box-shadow'>
              {lists.map(({id, name, date, lastEditedBy}, index) => (
                <List key={Math.random() + id}
                  id={id}
                  name={name}
                  date={date}
                  deleteList={deleteList}
                  lastEditedBy={lastEditedBy || user.username}
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
