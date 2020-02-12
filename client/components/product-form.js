
import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = ({cancel}) => {
  const [product, setProduct] = useState({name: '', onHand: '', par: '', orderQty: ''})

  const handleChange = event => {
    const {name, value} = event.target
    setProduct({...product, [name]: value})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/products', product)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form className='product-form row vt-pdg-20' onSubmit={handleSubmit}>
        <div className='column'>
          <input type="text" name='name' value={product.name} onChange={handleChange} />
        </div>
        <div className='column'>
          <input type="number" name='onHand' value={product.onHand} onChange={handleChange} />
        </div>
        <div className='column'>
          <input type="number" name='par' value={product.par} onChange={handleChange} />
        </div>
        <div className='column'>
          <input type="number" name='orderQty' value={product.orderQty} onChange={handleChange} />
        </div>
        <div>
          <button type='submit' className='action-btn white bg-drk-blue pointer' onClick={handleSubmit}>ADD</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={cancel}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm;
