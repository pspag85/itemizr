import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import axios from 'axios'

const Suppliers = withRouter(() => {
  const [suppliers, setSuppliers] = useState([])

  const loadSuppliers = async () => {
    try {
      const {data} = await axios.get('/api/suppliers')
      setSuppliers(data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadSuppliers()
  }, [])

  const [values, setValues] = useState({name: '', contact: ''})

  const handleChange = evt => {
    console.log(evt.target.value)
    const {name, value} = evt.target
    setValues({...values, [name]: value})
  }

  const addNewSupplier = async evt => {
    evt.preventDefault()
    const {name, contact} = values
    const {data} = await axios.post('/api/suppliers', {
        name,
        contact
      }
    )
  }

  return (
    <Fragment>
      <div className='page-pdg'>
        <div className='header row font-20'>
          <h3>Suppliers</h3>
        </div>
        <div className='bg-white box-shadow'>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>CONTACT</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map(({name, contact}) => <tr
                key={name + Math.random()}
                className='supplier'>
                <td>{name}</td>
                <td>{contact}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <Link to='/suppliers/add' className='add-container pointer box-shadow'>
          <h3>+ Add Supplier</h3>
        </Link>
      </div>
    </Fragment>
  )
})

export default Suppliers
