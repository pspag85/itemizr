import React, {useState} from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../store'

const EditProduct = ({listId, id, name, onHand, par, orderQty, putProduct, deleteProduct}) => {
  const product = {id, name, onHand, par, orderQty}
  const [productState, setProductState] = useState(product)

  const handleChange = event => {
    const {value} = event.target
    const product = {...productState}
    product[event.target.name] = value
    setProductState(product)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const {name, value} = event.target
    const product = {listId, ...productState}
    product[name] = value
    putProduct(id, product)
  }

  return (
    <form className='data-form row vt-pdg-20' onSubmit={handleSubmit} onBlur={handleSubmit}>
      <div className='column'>
        <input type="text" name='name' value={productState.name || name} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="number" name='onHand' value={productState.onHand || onHand} onChange={handleChange} />
      </div>
      <div className='column'>
        <input type="number" name='par' value={productState.par || par} onChange={handleChange} />
      </div>
      <div className='column flex'>
        <input type="number" name='orderQty' value={productState.orderQty || orderQty} onChange={handleChange} />
        <p onClick={() => deleteProduct(id)}>&times;</p>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  putProduct: (id, productData) => dispatch(updateProduct(id, productData))
})

export default connect(null, mapDispatchToProps)(EditProduct)
