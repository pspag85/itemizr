import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Items from './items'
import {getItems} from '../store'
import '../css/items.css'

// ****TODO: needs to be refactored as collapsable just like edit items

const OrderItems = withRouter(({loadItems, items, location}) => {
  const {pathname} = location
  const listId = pathname.split('/')[2]

  const [list, setList] = useState([])

  const getList = async id => {
    try {
      const {data} = await axios.get(`/api/lists/${id}`)
      setList(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getList(listId)
  }, [])

  useEffect(() => {
    loadItems(list.id)
  }, [])

  const itemsArr = items.map(({id}) => ({id, checked: false}))
  const [checkedItems, setCheckedItems] = useState(itemsArr)

  const selectAllItems = () => {
    const currentlyCheckedItems = checkedItems.map(item => {
      if(!item.checked) item.checked = true
      return item
    })
    setCheckedItems(currentlyCheckedItems)
  }

  const clearSelection = () => {
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
      selectedItems={checkedItems}
      clearSelection={clearSelection}
    />
  )
})

const mapStateToProps = ({items}) => ({items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadItems: listId => dispatch(getItems(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)

