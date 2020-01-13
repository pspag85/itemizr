import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import {updateItem} from '../store'

const ItemInput = ({input, id, value, putItem}) => {
  const [inputVal, setInputVal] = useState(value)

  const handleChange = event => setInputVal(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    const {value} = event.target.children[0]
    const itemData = {}
    itemData[input] = value
    putItem(id, itemData)
  }

  return input && (
    <Fragment>
      <form className='item-form' onSubmit={handleSubmit} onBlur={handleSubmit}>
       <input
          type='text'
          value={inputVal || ''}
          onChange={handleChange}
        />
     </form>
    </Fragment>
  )
}

const mapStateToProps = ({user}) => ({user})

const getItemId = ({id}) => id

const mapDispatchToProps = (dispatch, ownProps) => ({
  putItem: (itemId, itemData) => dispatch(updateItem(itemId, itemData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemInput)