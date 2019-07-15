import React, {Component, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserPage from './user-page'
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
          <div id='items-header' className='row'>
          <h3>{currentList.name}</h3>     
          </div>        
          <div className='col-header row'>
            <ColHeader headers={['ITEM', 'ON HAND', 'PAR', 'ORDER QTY']} />
          </div>      
          <div className='edit-items-container bg-white box-shadow'>
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
            <AddItem listId={currentList.id}/>
          </div>
          <div className='save'>
            <h4 className='cancel' onClick={cancelEdit}>CANCEL</h4>
            <button className='save-button pointer' onClick={() => saveChanges(currentList.id)}>SAVE CHANGES</button>
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
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id)),
  saveChanges: listId => dispatch(saveItems(listId)),
  cancelChanges: listId => dispatch(cancelUpdate(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)