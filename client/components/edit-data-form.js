import React, {useState, version} from 'react'
import axios from 'axios'

const EditDataForm = ({initialState, id, model, updateData, closeForm}) => {
  const [formState, setFormState] = useState(initialState)

  const editData = async formData => {
    try {
      const {data} = await axios.put(`/api/${model}`, formData)
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
    const data = {id, ...formState, [name]: value}
    editData(data)
    updateData(data)
    setFormState(initialState)
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
          <button type='submit' className='action-btn white bg-drk-blue pointer' onClick={handleSubmit}>SAVE</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default EditDataForm;
