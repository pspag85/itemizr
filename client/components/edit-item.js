import React, {useState} from 'react'
import {connect} from 'react-redux'
import {updateItem} from '../store'

const EditItem = ({id, name, onHand, par, orderQty, putItem, deleteItem}) => {
  const item = {
    id,
    name,
    onHand,
    par,
    orderQty,
    deleteItem
  }

  const [itemState, setItemState] = useState(item)

  const handleChange = event => {
    console.log('event on change:    ', event.target.value)
    const {value} = event.target
    const item = {...itemState}
    item[event.target.name] = value
    setItemState(item)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('event on submit:    ', event.target)
    const {value} = event.target
    const itemData = {...itemState}
    itemData[event.target.name] = value
    putItem(itemData)
  }

  return (
    <form className='item-row item-form' onSubmit={handleSubmit} onBlur={handleSubmit}>
      <div className='column'>
        <input type="text" name='name' value={itemState.name || name} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="text" name='onHand' value={itemState.onHand || onHand} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="text" name='par' value={itemState.par || par} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="text" name='orderQty' value={itemState.orderQty || orderQty} onChange={handleChange} />
      </div>
      <div onClick={() => deleteItem(id)} >
        <h4>&times;</h4>
      </div>
    </form>
  )
}
const mapStateToProps = ({user}) => ({user})

const getItemId = ({id}) => id

const mapDispatchToProps = (dispatch, ownProps) => ({
  putItem: (itemId, itemData) => dispatch(updateItem(itemId, itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)
