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
    const {user, getCurrentList, loadItems, history, location} = this.props
    const {pathname} = location
    const listId = pathname.split('/')[2]
    getCurrentList(listId)
    loadItems(listId)
    if(!user.id) history.push('/')
  }
  render() {
    const {currentList, items, logoutUser, deleteItem, closeList} = this.props
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
          {items.length < 1 ? null
          :<div className='items-container bg-white box-shadow'>
            {items.map(({id, name, onHand, par, orderQty}, index) => (
              <EditItem
                key={id + name}
                id={id}
                name={name}
                onHand={onHand}
                par={par}
                orderQty={orderQty}
              />
            ))}
            <AddItem listId={currentList.id}/>
          </div>
          }
          <div className='save'>
            <h4 className='cancel' onClick={closeList}>CANCEL</h4>
            <button className='save-button'>SAVE CHANGES</button>
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
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)