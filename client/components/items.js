import React, {useEffect, Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import Item from './item'
import ColHeader from './col-header'
import {getItems} from '../store'
import '../css/items.css'

const Items = withRouter(({user, loadItems, items, listId, selectItem, orderPage, selectedItems, selectAllItems, allSelected, clearSelection, history, location}) => {
  const {pathname} = location
  if(!user.id) history.push('/')

  useEffect(() => {
    loadItems(listId)
  }, [])

  return listId ? (
    <Fragment>
      <div>
        <div className='header row font-20'>
          {orderPage ? // TODO:  CREATE ORDERLINK COMPONENT FOR THIS TERNARY
            <Fragment>
              {allSelected ?
                <div onClick={clearSelection} >
                  <h3 src='/img/clear.png' className='font-20 flex-start light-font underline'>CLEAR</h3>
                </div>
                :
                <div onClick={selectAllItems} >
                  <h3 className='font-20 flex-start light-font underline'>SELECT ALL</h3>
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
          <ColHeader num={'four'} headers={['ITEM', 'ON HAND', 'PAR', 'ORDER QTY']} />
        </div>
        {!Array.isArray(items) ? null
        : <div className='row-container box-shadow bg-white'>
            {items.map(({id, name, onHand, par, orderQty}, index) => (
              <Item
                key={id + name}
                id={id}
                name={name}
                onHand={onHand}
                par={par}
                orderQty={orderQty}
                orderPage={orderPage}
                selectItem={selectItem}
                selected={selectedItems && selectedItems.find(item => item.id === id).checked}
                allSelected={allSelected}
              />
            ))}
          </div>
        }
      </div>
      {!orderPage && <Link to={`/lists/${listId}/order`} className='action-btn white bg-blue pointer'>ORDER</Link>}
    </Fragment>
  ) : null
})

const mapStateToProps = ({user, items}) => ({user, items})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadItems: listId => dispatch(getItems(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)




