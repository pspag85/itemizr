import React from 'react'


var ColHeaders = function(props){
  return(
    <div className='colHeaders'>
      <div className='itemRow'>
        <div className='column'>
          <h4> {props.col_1} </h4>
        </div>
        <div className='column'>
          <h4> {props.col_2} </h4>
        </div>
        <div className='column'>
          <h4> {props.col_3} </h4>
        </div>
        <div className='column'>
          <h4> {props.col_4} </h4>
        </div>
      </div>
    </div>
  )
}

export default ColHeaders
