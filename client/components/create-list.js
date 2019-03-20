import React from 'react'

var CreateList = function(props){
  return(
    <div>
      <h3> create list </h3>
      <button onClick={props.handleClick}> + </button>
    </div>
  )
}

export default CreateList
