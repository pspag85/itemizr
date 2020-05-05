import React, {Fragment} from 'react'

const FormButtons = ({submitText, handleSubmit, closeForm}) => (
  <Fragment>
    <button type='submit' className='action-btn' onClick={handleSubmit}>{submitText}</button>
    <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
  </Fragment>
)

export default FormButtons;
