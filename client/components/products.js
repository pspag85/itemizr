import React, {useState, useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchData, openForm, closeForm} from '../../utility/helpers'
import UserBar from './user-bar'
import ColHeader from './col-header'
import Product from './product'
import ProductForm from './product-form'
import AddProductButton from './add-product-button';
import '../css/products.css'

const Products = withRouter(({user, history}) => {
  if(!user.id) history.push('/')

  const [products, setProducts] = useState([])
  const [formState, setFormState] = useState(false)

  const loadProducts = () => fetchData('products', setProducts)

  useEffect(() => {
    loadProducts()
  }, [])

  const updateProducts = newProduct => setProducts([...products, newProduct])
  const openProductForm = () => setFormState(true)
  const closeProductForm = () => setFormState(false)

  return (
    <Fragment>
      <UserBar showNav={true} />
      <div className='page-pdg'>
        <div className='col-header row secondary-txt'>
          <ColHeader headers={['PRODUCT', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        {!products ? null
        : <div className='row-container'>
            {products.map(({id, name, onHand, par, orderQty}, index) => (
              <Product
                key={id + name}
                id={id}
                name={name}
                onHand={onHand}
                par={par}
                orderQty={orderQty}
              />
              ))}
          </div>
        }
        {formState ? <ProductForm updateProducts={updateProducts} closeProductForm={closeProductForm} />
        : <AddProductButton openProductForm={openProductForm} />}
      </div>
    </Fragment>
  )
})

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, null)(Products)
