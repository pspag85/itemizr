import React from 'react'

const CreateList = props => (
  <div id='create-list' className='nav-wdth'>
    <h3>Create List</h3>
    <button onClick={props.handleClick}> + </button>
  </div>
)

export default CreateList
