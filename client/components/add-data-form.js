import React, {useState} from 'react'
import axios from 'axios'

const AddDataForm = ({model, insertData, closeForm}) => {
  const initialFormState = model === 'products' ? {name: '', onHand: '', par: '', orderQty: ''} : {name: '', email: '', phone: ''}
  const [formState, setFormState] = useState(initialFormState)

  const addData = async data => {
    try {
      const {data} = await axios.post(`/api/${model}`, formState)
      insertData(data)
    } catch(err) {
      console.error(err)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target
    setFormState({...formState, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const {name, value} = event.target
    const data = {...formState, [name]: value}
    addData(data)
    setFormState(initialFormState)
    closeForm()
  }

  return (
    <div>
      <form className='data-form row vt-pdg-20' onSubmit={handleSubmit}>
        {Object.keys(formState).map((key, idx) => (
          <div key={key} className='column'>
            <input
              type={idx > 0 && model !== 'vendors' ? 'number' : 'text'}
              name={key} value={formState[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button type='submit' className='action-btn white bg-drk-blue pointer' onClick={handleSubmit}>ADD</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default AddDataForm;
