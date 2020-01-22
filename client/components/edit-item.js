import React, {useState} from 'react'
import {connect} from 'react-redux'
import {updateItem} from '../store'

const EditItem = ({listId, id, name, onHand, par, orderQty, putItem, deleteItem}) => {
  const item = {id, name, onHand, par, orderQty}
  const [itemState, setItemState] = useState(item)

  const handleChange = event => {
    const {value} = event.target
    const item = {...itemState}
    item[event.target.name] = value
    setItemState(item)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const {name, value} = event.target
    const item = {listId, ...itemState}
    item[name] = value
    putItem(id, item)
  }

  return (
    <form className='item-form row vt-pdg-20' onSubmit={handleSubmit} onBlur={handleSubmit}>
      <div className='column'>
        <input type="text" name='name' value={itemState.name || name} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="number" name='onHand' value={itemState.onHand || onHand} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="number" name='par' value={itemState.par || par} onChange={handleChange} />
      </div>
      <div className='column flex'>
        <input type="number" name='orderQty' value={itemState.orderQty || orderQty} onChange={handleChange} />
        <p onClick={() => deleteItem(id)}>&times;</p>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  putItem: (id, itemData) => dispatch(updateItem(id, itemData))
})

export default connect(null, mapDispatchToProps)(EditItem)
