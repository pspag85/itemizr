import React,{Component} from 'react'
import {Link} from 'react-router-dom'
const axios = require('axios') //API libary ajax
import {connect} from 'react-redux'
import UserMenu from './user-menu'
import AddItem from './add-item'
import Item from './item'
import ColHeader from './col-header'
import {getItems, addItem, removeItem} from '../store'

class EditItems extends Component {
  async componentDidMount() {
    const {loggedInUser, history, loadItems} = this.props
    if(!loggedInUser.id) history.push('/')
    try {
      const res = await loadItems()
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {items, logoutUser, deleteItem} = this.props
    return (
      <div id='edit-items-container'>
        <UserMenu />
        <AddItem />
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
            remove={deleteItem}
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
  loadItems: () => dispatch(getItems()),
  createItem: () => dispatch(addItem()),
  deleteItem: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItems)