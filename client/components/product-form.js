
import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = ({updateProducts, closeProductForm}) => {
  const [product, setProduct] = useState({name: '', onHand: '', par: '', orderQty: ''})

  const addProduct = async product => {
    try {
      const {data} = await axios.post('/api/products', product)
      updateProducts(data)
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
    const {name, value} = event.target
    const newProduct = {...product, [name]: value}
    addProduct(newProduct)
    setProduct({name: '', onHand: '', par: '', orderQty: ''})
    closeProductForm()
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
          <button className='action-btn cancel-btn pointer light-font' onClick={closeProductForm}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm;
