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

  const insertProduct = newProduct => setProducts([...products, newProduct])
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

  return (
    <Fragment>
      <Header title='Products' />
      <table className='top-mrg-20'>
        <TableHeader headers={['Item', 'No.', 'Category', 'Vendor', 'Unit', 'Par', 'On-hand']} />
        <tbody className='table-body'>
          {products && products.map((product) => {
            const {id, name, category, vendor, unit, par, onHand} = product
            const productNumber = id.toString()
            const stringUnit = unit === 0 ? '0.00' : unit.toString()
            const productData = {
              name,
              productNumber,
              category,
              vendor,
              unit: stringUnit,
              par,
              onHand
            }
            return (
              <TableRow
                key={id + Math.random()}
                id={id}
                rowData={productData}
                updateData={updateProducts}
                deleteRow={deleteProduct}
              />
            )
          })}
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
