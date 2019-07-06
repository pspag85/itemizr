import React, {Component, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CreateList from './create-list'
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

    return (
      <Fragment>
        <UserPage navbar={true}/>
        <CreateList />
        <div id='items-body' className='wdth-73'>
          <div id='items-header' className='row'>
            <h3>{currentList.name}</h3>
          </div>
          <div className='col-header row'>
            <ColHeader num={'four'} headers={['Name', 'On Hand', 'Par', 'Order Qty']} />
          </div>
          {items.length < 1 ? null
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

export default connect(mapStateToProps, mapDispatchToProps)(Items)




