import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
const axios = require('axios') //API libary ajax
import {connect} from 'react-redux'
import UserPage from './user-page'
import AddItem from './add-item'
import Item from './item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem} from '../store'
import '../css/items.css'

class Items extends Component {

  async componentDidMount() {
    const {loggedInUser, history, loadItems, location} = this.props
    const {pathname} = location
    const listId = pathname.split('/')[2]
    if(!loggedInUser.id) history.push('/')
    try {
      const res = await loadItems(listId)
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {items, logoutUser, deleteItem, location, getCurrentList} = this.props
    const {pathname} = location
    const listId = pathname.split('/')[2]
    const {name} = getCurrentList(listId)
    return (
      <div id='items-container'>
        <UserPage navbar={true}/>
        <AddItem listId={listId}/> {/*add supplier*/}
        <div id='items-header' className='row'>
          <h3>{name}</h3>
        </div>
        <div className='col-header row'>
          <ColHeader num={'four'} headers={['Name', 'On Hand', 'Par', 'Order Qty']} />
        </div>
        {items.length < 1 ? <h2> no items </h2>
        :items.map((item, index) => <Item
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

const mapStateToProps = state => ({
  loggedInUser: state.user,
  items: state.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId)),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)




