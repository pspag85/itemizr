import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Items from './items'
import {getList, getItems} from '../store'
import '../css/items.css'

const OrderItems = withRouter(({loadItems, items, getCurrentList, currentList, location}) => {

  const {pathname} = location
  const listId = pathname.split('/')[2]

  useEffect(() => {
    getCurrentList(listId)
  }, [getCurrentList])

  useEffect(() => {
    loadItems()
  }, [loadItems])

  const itemsArr = items.map(({id}) => ({id, checked: false}))
  const [checkedItems, setCheckedItems] = useState(itemsArr)

  const selectItem = (id, evt) => {
    console.log(evt.target)
    const currentlyCheckedItems = checkedItems.map(item => {
      console.log('id: ', id, item.checked)
      if(item.id === id) {
        console.log('match')
        item.checked = !item.checked
      }
      return item
    })
    setCheckedItems(currentlyCheckedItems)
    console.log('checked:  ', checkedItems)
  }

  return (
    <Items selectItem={selectItem} orderPage={true} />
  )
})

const mapStateToProps = ({items}) => ({items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)

