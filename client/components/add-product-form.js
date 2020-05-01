import React, {useState} from 'react'
import axios from 'axios'
import { isTextField } from '../utility/helpers'

const AddProductForm = ({addData, insertProduct, closeForm}) => {
  const [product, setProduct] = useState({
    name: '',
    productNumber: '',
    category: '',
    vendor: '',
    unit: 0,
    par: 0,
    onHand: 0
  })

  const addProduct = async product => {
    try {
      const {data} = await axios.post('/api/products', product)
      console.log('data: ', data)
      insertProduct(data)
    } catch(err) {
      console.error(err)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target
    setProduct({...product, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    addProduct(product)
    closeForm()
  }

  return (
    <div className='product-form-wrapper'>
      <form className='product-form row vt-pdg-20' onSubmit={handleSubmit}>
        <input
          key='name'
          placeholder={product.name || 'Name'}
          name='name' value={product.name}
          onChange={handleChange}
        />
        <input
          key='productNumber'
          placeholder={product.productNumber || 'No.'}
          name='productNumber' value={product.productNumber}
          onChange={handleChange}
        />
        <input
          key='category'
          placeholder={product.category || 'Category'}
          name='category' value={product.category}
          onChange={handleChange}
        />
        <input
          key='vendor'
          placeholder={product.vendor || 'Vendor'}
          vendor='name' value={product.vendor}
          onChange={handleChange}
        />
        <input
          key='unit'
          placeholder={product.unit}
          name='unit' value={product.unit}
          onChange={handleChange}
        />
        <input
          key='par'
          placeholder={product.par}
          name='par' value={product.par}
          onChange={handleChange}
        />
        <input
          key='onHand'
          placeholder={product.onHand}
          name='onHand' value={product.onHand}
          onChange={handleChange}
        />
      </form>
      <div>
        <button type='submit' className='action-btn' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </div>
  )
}

export default AddProductForm;
