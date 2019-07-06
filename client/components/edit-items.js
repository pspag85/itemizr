import React, {Component, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserPage from './user-page'
import AddItem from './add-item'
import EditItem from './edit-item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem} from '../store'
import '../css/edit-items.css'

class EditItems extends Component {

  componentDidMount() {
    const {user, listId, getCurrentList, loadItems, history,} = this.props
    getCurrentList(listId)
    loadItems(listId)
    if(!user.id) history.push('/')
  }

  render() {
    const {listId, currentList, items, logoutUser, deleteItem, closeList} = this.props
    return (
      <Fragment>
        <UserPage />
        <div id='edit-items-container'>
          <div id='items-header' className='row'>
          {currentList && <h3>{currentList.name}</h3>  }      
          </div>        
          <div className='col-header row'>
            <ColHeader headers={['Name', 'On Hand', 'Par']} />
          </div>      
          {!Array.isArray(items) ? <h2> no items </h2>
          :items.map((item, index) => <EditItem
              key={item.id + item.name}
              id={item.id}
              name={item.name}
              onHand={item.onHand}
              par={item.par}
              deleteItem={deleteItem}
            />
          )}
          <AddItem listId={listId}/>
          <div className='save'>
            <h4 className='cancel' onClick={closeList}>CANCEL</h4>
            <button className='save-button'>SAVE CHANGES</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({user, lists, items}) => ({user, currentList: lists[0], items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId)),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)