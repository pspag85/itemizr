import React, {Component, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CreateListButton from './create-list-button'
import UserPage from './user-page'
import AddItem from './add-item'
import Item from './item'
import ColHeader from './col-header'
import {getList, getItems, addItem, removeItem} from '../store'
import '../css/items.css'

class Items extends Component {

  componentDidMount() {
    const {user, getCurrentList, loadItems, history, location} = this.props
    const {pathname} = location
    const listId = pathname.split('/')[2]
    getCurrentList(listId)
    loadItems(listId)
    if(!user.id) history.push('/')
  }

  render() {
    const {items, currentList, logoutUser, deleteItem, location} = this.props
    return currentList ? (
      <Fragment>
        <UserPage navbar={true}/>
        <CreateListButton />
        <div id='items-body' className='wdth-73'>
          <div className='header row font-20'>
            <h3>{currentList.name}</h3>
            <div></div>
            <Link to={`/lists/${currentList.id}/edit`} >
              <img src='/img/edit-btn.png' className='edit-btn' />
            </Link>       
          </div>
          <div className='col-header row secondary-txt'>
            <ColHeader num={'four'} headers={['Name', 'On Hand', 'Par', 'Order Qty']} />
          </div>
          {!Array.isArray(items) ? null
          : <div className='items-container box-shadow'>
              {items.map(({id, name, onHand, par, orderQty}, index) => (
                <Item
                  key={id + name}
                  id={id}
                  name={name}
                  onHand={onHand}
                  par={par}
                  orderQty={orderQty}
                />
              ))}
            </div>
          }
        </div>
        <Link to={`/lists/${currentList.id}/order`} className='action-btn white bg-blue pointer'>ORDER</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Items)




