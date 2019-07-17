import React from 'react'
import Items from './items'
import '../css/items.css'

const OrderItems = () => {
  const selectItem = evt => {
    console.log('selected event:  ', evt)
  }

  return (
    <Items selectItem={selectItem} orderPage={true} />
  )
}


export default OrderItems
