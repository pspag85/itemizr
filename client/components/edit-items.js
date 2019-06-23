import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
const axios = require('axios') //API libary ajax
import {connect} from 'react-redux'
import UserPage from './user-page'
import AddItem from './add-item'
import EditItem from './item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem} from '../store'
import '../css/items.css'

class EditItems extends Component {

  async componentDidMount() {
    const {user, loadItems, getCurrentList, history, location} = this.props
    const {pathname} = location
    const listId = pathname.split('/')[2]
    if(!user.id) history.push('/')
    try {
      await loadItems(listId)
      await getCurrentList(listId)
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {list, items, logoutUser, deleteItem} = this.props
    const {id, name} = list
    return (
      <div id='edit-items-container'>
        <UserPage navbar={true} />
        <AddItem listId={id}/>
        <div id='items-header' className='row'>
          <h3>{name}</h3>
        </div>
        <div className='col-header row'>
          <ColHeader num={'four'} headers={['Name', 'On Hand', 'Par', 'Order Qty']} />
        </div>
        {!Array.isArray(items) ? <h2> no items </h2>
        :items.map((item, index) => <EditItem
            key={item.id + item.name}
            id={item.id}
            name={item.name}
            onHand={item.onHand}
            par={item.par}
            orderQty={item.orderQty}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({user, lists, items}) => ({user, list: lists, items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId)),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)