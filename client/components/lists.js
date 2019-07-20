import React, {useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserPage from './user-page'
import CreateListButton from './create-list-button'
import List from './list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Lists = withRouter(({user, loadLists, lists, deleteList}) => {

  useEffect(() => {
    loadLists()
  }, [loadLists])

  return (
    <Fragment>
      <UserPage navbar={true}/>
      <CreateListButton />
      <div id='lists-body' className='wdth-73'>
        <div className='header row font-20'>
          <h3>MY LISTS</h3>
        </div>
        {lists.length < 1 ? <h4>Start by creating your first list</h4>
        : <Fragment>
            <div className='col-header row secondary-txt'>
              <ColHeader colNum={'three'} headers={['DATE', 'LIST NAME', 'LAST EDITED BY']}/>
            </div>
            <div className='lists-container box-shadow'>
              {Array.isArray(lists) && lists.map(({id = null, name, date, lastEditedBy}, index) => (
                <List key={id + date}
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
