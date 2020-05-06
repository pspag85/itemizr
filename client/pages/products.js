import React, {Fragment, useState, useEffect, useCallback} from 'react'
import {useToggleState} from '../utility/hooks';
import axios from 'axios'
import Header from '../components/header';
import TableHeader from '../components/table-header'
import Product from '../components/product';
import EditProduct from '../components/edit-product';
import AddProductForm from '../components/add-product'
import AddProductButton from '../components/add-product-button'
import {formatNumToThreeDigitStr, formatPriceToStr} from '../utility/helpers'

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [addFormState, setAddFormState] = useState(false)
  const [editFormState, setEditFormState] = useState({id: null, isOpen: false})

  const insertProduct = (newProduct) => setProducts([...products, newProduct])
  const updateProducts = (productData) => {
    const updatedProducts = products.map(product => {
      return product.id === productData.id ? productData : product
    })
    setProducts(updatedProducts)
  }

  const getProducts = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    } catch(err) {
      console.error(err)
    }
  }, [setProducts])

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`)
    } catch(err) {
      console.error(err)
    } finally {
      const updatedProducts = products.filter(product => product.id !== id)
      setProducts(updatedProducts)
    }
  }

  const openAddForm = () => setAddFormState(true)
  const closeAddForm = () => setAddFormState(false)

  const openEditForm = (id) => setEditFormState({id, isOpen: true})
  const closeEditForm = (id) => setEditFormState({id: null, isOpen: false})

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const tableHeaders = ['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand']

  const formatProduct = ({id, name, category, vendor, price, quantity, unit, par, onHand}) => {
    const productNumber = formatNumToThreeDigitStr(id)
    const priceStr = formatPriceToStr(price)
    const productData = {
      name,
      productNumber,
      category,
      vendor: vendor.name,
      price: priceStr,
      quantity,
      unit,
      par,
      onHand
    }
    return productData
  }

  const renderProducts = () => (
    products.map((product) => {
      const productData = formatProduct(product)
      const {id, isOpen} = editFormState
      const editMode = id === product.id && isOpen
      return editMode ? (
        <EditProduct
          key={product.id + Math.random()}
          id={product.id}
          currentState={productData}
          updateProducts={updateProducts}
          closeForm={closeEditForm}
        />
      ) : (
        <Product
          key={product.id + Math.random()}
          id={product.id}
          productData={productData}
          editProduct={openEditForm}
          updateProducts={updateProducts}
          deleteProduct={deleteProduct}
        />
      )
    })
  )

  return (
    <Fragment>
      <Header title='Products' />
      <table>
        <TableHeader headers={tableHeaders} />
        <tbody className='table-body'>
          {products && renderProducts()}
        </tbody>
      </table>
      {addFormState
        ? <AddProductForm insertProduct={insertProduct} closeForm={closeAddForm} />
        : <AddProductButton openForm={openAddForm} />
      }
    </Fragment>
  )
}

export default Products
