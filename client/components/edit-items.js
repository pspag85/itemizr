import React, {Component, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserPage from './user-page'
import AddItemButton from './add-item-button'
import AddItem from './add-item'
import EditItem from './edit-item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem, saveItems, cancelUpdate} from '../store'
import '../css/edit-items.css'

class EditItems extends Component {
  
  componentDidMount() {
    const {user, getCurrentList, loadItems, history, location} = this.props
    if(!user.id) history.push('/')
    const {pathname} = location
    const listId = pathname.split('/')[2]
    getCurrentList(listId)
    loadItems(listId)
  }

  cancelEdit = () => {
    const {currentList, cancelChanges, history} = this.props
    cancelChanges(currentList.id)
    history.push(`/lists/${currentList.id}`)
  }

  render() {
    const {cancelEdit} = this
    const {currentList, items, logoutUser, deleteItem, saveChanges} = this.props
    return currentList ? (
      <Fragment>
        <UserPage />
        <div id='edit-items-body'>
          <div className='header row font-20'>
          <h3>{currentList.name}</h3>
          </div>        
          <div className='col-header row secondary-txt'>
            <ColHeader headers={['ITEM', 'ON HAND', 'PAR', 'ORDER QTY']} />
          </div>      
          <div className='edit-items-container bg-white box-shadow'>
            <AddItem listId={currentList.id} open={true} />
            {!Array.isArray(items) ? null
            :items.map(({id, name, onHand, par, orderQty}, index) => (
              <EditItem
                key={id + name}
                id={id}
                name={name}
                onHand={onHand}
                par={par}
                orderQty={orderQty}
                deleteItem={deleteItem}
              />
            ))}
            <AddItemButton />
          </div>
          <div className='save'>
            <button className='action-btn white bg-blue pointer' onClick={() => saveChanges(currentList.id, items)}>SAVE CHANGES</button>
            <h4 className='cancel-btn pointer light-font' onClick={cancelEdit}>CANCEL</h4>
          </div>
        </div>
      </Fragment>
    ) : null
  }
}

const mapStateToProps = ({user, lists, items}) => ({user, currentList: lists[0], items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId)),
  deleteItem: id => dispatch(removeItem(id)),
  saveChanges: (listId, items) => dispatch(saveItems(listId, items)),
  cancelChanges: listId => dispatch(cancelUpdate(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)