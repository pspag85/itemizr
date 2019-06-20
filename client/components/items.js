import React,{Component} from 'react'
import {Link} from 'react-router-dom'
const axios = require('axios') //API libary ajax
import {connect} from 'react-redux'
import UserMenu from './user-menu'
import AddItem from './add-item'
import Item from './item'
import ColHeaders from './col-headers'
import {getItems, addItem, removeItem} from '../store'

class Items extends Component {
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
      <div id='items-container'>
        <UserMenu />
        <AddItem />
        <ColHeaders
          col_1={'Name'}
          col_2={'On Hand'}
          col_3={'Par'}
          col_4={'Order Qty'}
         />

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

export default connect(mapStateToProps, mapDispatchToProps)(Items)




