import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import UserBar from './user-bar'
import AddDataButton from './add-data-button'
import EditProduct from './edit-product'
import ColHeader from './col-header'
import {getProducts, addProduct, removeProduct, saveProducts, cancelUpdate} from '../store'
import products from './products'

const EditProducts = ({user, loadProducts, product, createProduct, deleteProduct, saveChanges, cancelChanges, history, location}) => {
  if(!user.id) history.push('/')

  useEffect(() => {
    loadProducts()
  }, [])

  const addNewProduct = async () => {
    try {
      const {data} = await axios.get('/api/products/new')
      let id = data
      products.forEach(product => {
        if(product.id === id) id += 1
      })
      if(id) {
        const newProduct = {id, name: '', onHand: '', par: '', orderQty: '', }
        createProduct(newProduct)
      }
    } catch(err) {
      console.error(err)
    }
  }

  const cancelEdit = () => {
    history.push('/products')
  }

  return list ? (
    <Fragment>
      <UserBar />
      <div id='edit-product-page' className='page-pdg'>
        <div className='header ft-20'>
        <h3>Products</h3>
        </div>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['PRODUCT', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        <div className='row-container bg-white box-shadow'>
          {products.length > 0 && products.map(({id, name, onHand, par, orderQty}, index) => (
            <EditProduct
              key={Math.random() + name}
              id={id}
              name={name}
              onHand={onHand}
              par={par}
              orderQty={orderQty}
              createProduct={createProduct}
              deleteProduct={deleteProduct}
            />
          ))}
          <AddDataButton addNewProduct={addNewProduct} />
        </div>
        <div className='save'>
          <button className='action-btn white bg-drk-blue pointer' onClick={() => saveChanges(list.id, product)}>SAVE CHANGES</button>
          <button className='action-btn cancel-btn pointer light-font' onClick={cancelEdit}>CANCEL</button>
        </div>
      </div>
    </Fragment>
  ) : null
}

const mapStateToProps = ({user, products}) => ({user, products})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadProducts: () => dispatch(getProducts()),
  createProduct: newProduct => dispatch(addProduct(newProduct)),
  deleteProduct: storeId => dispatch(removeProduct(storeId)),
  saveChanges: (product) => dispatch(saveProducts(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts)