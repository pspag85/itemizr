import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'

const ItemInput = ({input, id, value, handleSubmit}) => {
  const [inputVal, setInputVal] = useState(value)

  const handleChange = event => setInputVal(event.target.value)

  return input && (
    <Fragment>
      <form className='item-form' onSubmit={handleSubmit} onBlur={(evt) => handleSubmit(input, evt)}>
       <input
          type='text'
          value={inputVal || ''}
          onChange={handleChange}
        />
     </form>
    </Fragment>
  )
}
const getItemId = ({id}) => id

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(ItemInput)