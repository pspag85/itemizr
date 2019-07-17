import React from 'react'

const Item = ({id, name, onHand, par, orderQty}) => (
  <div className='item row'>
    <div className='column'>
      <h5>{name}</h5>
    </div>
    <div className='column'>
      <h5>{onHand}</h5>
    </div>
    <div className='column'>
      <h5>{par}</h5>
    </div>
    <div className='column'>
      <h5>{orderQty}</h5>
    </div>
  </div>
)

export default Item