import React, {useState} from 'react'
import axios from 'axios'
import { useFormState } from '../utility/hooks'
import { isTextField } from '../utility/helpers'

const DataForm = ({formState, handleChange, handleSubmit, closeForm}) => (
  <div>
    <form className='data-form row vt-pdg-20' onSubmit={handleSubmit}>
      {Object.keys(formState).map(key => (
        <div key={key} className='column'>
          {key === 'productNumber' ? <h5>{formState[key] < 1 ? '--' : formState[key]}</h5>
          : <input
              type={isTextField(key) ? 'text' : 'number'}
              name={key} value={formState[key]}
              onChange={handleChange}
            />
          }
        </div>
      ))}
      <div>
        <button type='submit' className='action-btn white bg-drk-blue pointer' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </form>
  </div>
)

export default DataForm;
