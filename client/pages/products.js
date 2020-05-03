import React, {Fragment, useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Header from '../components/header';
import TableHeader from '../components/table-header'
import TableRow from '../components/table-row';
import AddProductForm from '../components/add-product-form'
import AddProductButton from '../components/add-product-button'

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [addFormState, setAddFormState] = useState(false)

  const getProducts = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    } catch(err) {
      console.error(err)
    }
  }, [setProducts])

  const insertProduct = newProduct => {
    console.log('newProduct:  ', newProduct)
    setProducts([...products, newProduct])
  }
  const updateProducts = productData => {
    const updatedProducts = products.map(product => {
      return product.id === productData.id ? productData : product
    })
    setProducts(updatedProducts)
  }

  const deleteProduct = async id => {
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

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const tableHeaders = ['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand']

  const formatProduct = ({id, name, category, vendor, price, quantity, unit, par, onHand}) => {
    const vendorName = typeof vendor === 'string' ? vendor : vendor.name
    const productNumber = id.toString()
    let priceString = price === 0 ? '$0.00' : `$${price.toString()}`
    if(priceString.length < 5) priceString += '0'
    const productData = {
      name,
      productNumber,
      category,
      vendor: vendorName,
      price: priceString,
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
      console.log('product data:  ', productData)
      return (
        <TableRow
          key={product.id + Math.random()}
          id={product.id}
          rowData={productData}
          updateData={updateProducts}
          deleteRow={deleteProduct}
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
