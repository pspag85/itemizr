import React, {useState, version} from 'react'
import axios from 'axios'
import { useFormState } from '../utility/hooks'
import {createInitialState} from '../utility/helpers'
import DataForm from './data-form';

const EditDataForm = ({id, currentState, model, updateData, closeForm}) => {
  const {formState, setFormState} = useFormState(model, currentState)

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

export default EditDataForm;
