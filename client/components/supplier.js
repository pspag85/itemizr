import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import CreateListButton from './create-list-button';

const Supplier = withRouter(({match}) => {
  const [supplier, setSupplier] = useState({name: '', contact: ''})

  const loadSupplier = async () => {
    const {id} = match.params
    try {
      const {data} = await axios.get(`/api/suppliers/${id}`)
      setSupplier(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadSupplier()
  }, [])

  return (
    <div className='page-pdg'>
      <div className='row bg-white box-shadow'>
        <div className='column'>
          <h4>{supplier.name}</h4>
        </div>
        <div className='column'>
          <h4>{supplier.contact}</h4>
        </div>
      </div>
      <CreateListButton />
    </div>
  )
})

export default Supplier