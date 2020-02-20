import React, {useState} from 'react'
import axios from 'axios'
import { useFormState } from '../utility/hooks'
import { isTextField } from '../utility/helpers'
import DataForm from './data-form';

const AddDataForm = ({model, insertData, closeForm}) => {
  const {formState, setFormState} = useFormState(model, null)

  const addData = async formData => {
    try {
      const {data} = await axios.post(`/api/${model}`, formData)
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
    closeForm()
  }

  return (
    <DataForm
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      closeForm={closeForm}
    />
  )
}

export default AddDataForm;
