import React, {useState} from 'react'
import axios from 'axios'
import { isTextField } from '../utility/helpers'

const AddProductForm = ({addData, insertProduct, closeForm}) => {
  const [product, setProduct] = useState({
    name: '',
    productNumber: 0,
    category: '',
    vendor: '',
    price: '0.00',
    quantity: 0,
    unit: '',
    par: 0,
    onHand: 0
  })

  const [msgState, setMsgState] = useState(false)

  const addProduct = async product => {
    try {
      const {data} = await axios.post('/api/products', product)
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

  const displayReadOnlyMsg = () => {
    setTimeout(() => {
      setMsgState(false)
    }, 2000)
    setMsgState(true)
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
        <span onClick={displayReadOnlyMsg}>
          <input
            key='productNumber'
            placeholder={product.productNumber || 'No.'}
            disabled
          />
        </span>
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
            <option value='unit'>Unit</option>
            <option value='case'>Case</option>
            <option value='tray'>Tray</option>
            <option value='bag'>Bag</option>
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
      <div>
        {msgState && <span>Product number is read only</span>}
        <button type='submit' className='action-btn' onClick={handleSubmit}>SAVE</button>
        <button className='action-btn cancel-btn pointer light-font' onClick={closeForm}>CANCEL</button>
      </div>
    </div>
  )
}

export default AddProductForm;
