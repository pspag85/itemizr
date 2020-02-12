import React, {useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Product from './product'
import ColHeader from './col-header'
import {getProducts} from '../store'
import '../css/products.css'

const Products = withRouter(({user, loadProducts, product, listId, selectProduct, orderPage, selectedProducts, selectAllProducts, allSelected, clearSelection, history, location}) => {
  const {pathname} = location
  if(!user.id) history.push('/')

  useEffect(() => {
    loadProducts(listId)
  }, [])

  return listId ? (
    <Fragment>
      <div>
        <div className='header row ft-20'>
          {orderPage ? // TODO:  CREATE ORDERLINK COMPONENT FOR THIS TERNARY
            <Fragment>
              {allSelected ?
                <div onClick={clearSelection} >
                  <h3 src='/img/clear.png' className='ft-20 flex-start light-font underline'>CLEAR</h3>
                </div>
                :
                <div onClick={selectAllProducts} >
                  <h3 className='ft-20 flex-start light-font underline'>SELECT ALL</h3>
                </div>
              }
              <Link to={`/lists/${listId}`} className='clear flex-start'>
                &times;
              </Link>
            </Fragment>
            :
            <Link to={`/lists/${listId}/edit`} >
              <img src='/img/edit-btn.png' className='edit-btn flex-start' />
            </Link>
          }
        </div>
        <div className='col-header row secondary-txt'>
          <ColHeader num={'four'} headers={['PRODUCT', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        {!Array.isArray(product) ? null
        : <div className='row-container box-shadow bg-white'>
            {products.map(({id, name, onHand, par, orderQty}, index) => (
              <Product
                key={id + name}
                id={id}
                name={name}
                onHand={onHand}
                par={par}
                orderQty={orderQty}
                orderPage={orderPage}
                selectProduct={selectProduct}
                selected={selectedProducts && selectedProducts.find(product => product.id === id).checked}
                allSelected={allSelected}
              />
            ))}
          </div>
        }
      </div>
      {!orderPage && <Link to={`/lists/${listId}/order`} className='action-btn white bg-drk-blue pointer'>ORDER</Link>}
    </Fragment>
  ) : null
})

const mapStateToProps = ({user, product}) => ({user, product})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadProducts:   () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)




