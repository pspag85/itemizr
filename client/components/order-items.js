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

  const selectAllItems = () => {
    console.log('selecting all')
    const currentlyCheckedItems = checkedItems.map(item => {
      if(!item.checked) item.checked = true
      return item
    })
    setCheckedItems(currentlyCheckedItems)
  }

  const clearSelection = () => {
    console.log('selecting all')
    const currentlyCheckedItems = checkedItems.map(item => {
      if(item.checked) item.checked = false
      return item
    })
    setCheckedItems(currentlyCheckedItems)
  }

  const selectItem = (id, evt) => {
    const currentlyCheckedItems = checkedItems.map(item => {
      if(item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
    setCheckedItems(currentlyCheckedItems)
  }

  return (
    <Items
      selectItem={selectItem}
      orderPage={true}
      selectAllItems={selectAllItems} 
      allSelected={checkedItems.every(({checked}) => checked)}
      clearSelection={clearSelection}
    />
  )
})

const mapStateToProps = ({items}) => ({items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentList: id => dispatch(getList(id)),
  loadItems: listId => dispatch(getItems(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)

