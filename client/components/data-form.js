import React from 'react'

const DataForm = ({formState, handleChange, handleSubmit, closeForm}) => (
  <div>
    <form className='product-form row vt-pdg-20' onSubmit={handleSubmit}>
      {Object.keys(formState).map(key => (
        <div key={key} className='column'>
          : <input
              name={key} value={formState[key]}
              onChange={handleChange}
            />
          }
        </div>
      ))}
      <div>
        <button type='submit' className='action-btn' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </form>
  </div>
)

export default DataForm;
