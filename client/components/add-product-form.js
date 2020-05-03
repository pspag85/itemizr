import React, {useState} from 'react'
import axios from 'axios'
import '../css/add-product-form.css'

const AddProductForm = ({addData, insertProduct, closeForm}) => {
  const [userMsg, setUserMsg] = useState('')

  const [product, setProduct] = useState({
    name: '',
    productNumber: 0,
    category: '',
    vendor: '',
    price: '0.00',
    quantity: 0,
    unit: 'Unit',
    par: 0,
    onHand: 0
  })

  const displayUserMsg = (msg) => setUserMsg(msg)

  const addProduct = async product => {
    const vendor = {name: product.vendor}
    try {
      const {data} = await axios.post('/api/products', product)
      insertProduct({vendor, ...data})
    } catch(err) {
      console.error(err)
    }
  }

  const validateForm = (product) => {
    if(!product.vendor) {
      // TODO: Make 'Vendor required' bold. Make 'vendors' a link to /vendors
      displayUserMsg('Vendor required. Go to vendors to create a vendor for this product')
      return false
    }
    return true
  }

  const handleChange = event => {
    const {name, value} = event.target
    setProduct({...product, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    const validated = validateForm(product)
    if(validated) {
      addProduct(product)
      closeForm()
    }
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
          id='product-number'
          key='productNumber'
          placeholder={product.productNumber || 'No.'}
          title='Product number is read only' // TODO: show on click
          disabled
        />
        <input
          placeholder={product.category || 'Category'}
          name='category' value={product.category}
          onChange={handleChange}
        />
        <input
          placeholder={product.vendor || 'Vendor'}
          name='vendor' value={product.vendor}
          onChange={handleChange}
        />
        <div className='price-container'>
          <input
            placeholder={product.price}
            name='price' value={product.price}
            onChange={handleChange}
          />
          <input
            placeholder={product.quantity}
            name='quantity' value={product.quantity}
            onChange={handleChange}
          />
          <select name='unit' onChange={handleChange} defaultValue='Unit'>
            <option value='Unit'>Unit</option>
            <option value='Case'>Case</option>
            <option value='Tray'>Tray</option>
            <option value='Bag'>Bag</option>
          </select>
        </div>
        <input
          placeholder={product.par}
          name='par' value={product.par}
          onChange={handleChange}
        />
        <input
          placeholder={product.onHand}
          name='onHand' value={product.onHand}
          onChange={handleChange}
        />
      </form>
      <div className='user-msg'>{userMsg}</div>
      <div>
        <button type='submit' className='action-btn' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </div>
  )
}

export default AddProductForm;
