import React from 'react'

const Logout = props => (
  <div>
    <button onClick={props.handleClick}>
      Logout {props.name}
    </button>
  </div>
)

export default Logout
