import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserPage from './user-page'
import AddItem from './add-item'
import EditItem from './edit-item'
import ColHeader from './col-header'
import {getItems, addItem, removeItem} from '../store'
import '../css/edit-items.css'

class EditItems extends Component {

  async componentDidMount() {
    const {user, listId, loadItems, history} = this.props
    if(!user.id) history.push('/')
    try {
      await loadItems(listId)
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {listId, items, logoutUser, deleteItem, closeList} = this.props
    return (
      <div id='edit-items-container'>
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
    )
  }
}

const mapStateToProps = ({user, items}) => ({user, items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadItems: listId => dispatch(getItems(listId)),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)