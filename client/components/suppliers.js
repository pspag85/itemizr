import React, {useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserBar from './user-bar'
import CreateListButton from './create-list-button'
import List from './list'
import ColHeader from './col-header'
import {getLists, addList, removeList, getItems, saveList} from '../store'
import '../css/lists.css'

const Suppliers = withRouter(() => (
  <Fragment>
    <UserBar showNav={true}/>
    <div id='lists-page' className='page-pdg'>
      <div className='header row font-20'>
        <h3>Suppliers</h3>
      </div>
      <CreateListButton />
    </div>
  </Fragment>
))

export default Suppliers
