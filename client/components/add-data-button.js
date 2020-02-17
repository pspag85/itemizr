import React, {Component} from 'react'
import '../css/add-data.css'

const AddDataButton = ({openForm, dataName}) => (
  <div>
    <div id='add-data' className='add-data flex ctr-items pointer' onClick={openForm} >
      <img className='add-data-btn' src='/img/add.png' />
      <h5> Add new {dataName} </h5>
    </div>
  </div>
)

export default AddDataButton