import React from 'react'

const ProductOptionMenu = ({deleteProduct, id}) => (
  <div className='list-menu bg-white box-shadow'>
    {deleteProduct && <div className={`column pointer delete-list`} onClick={() => deleteProduct(id)}>
      <img className='delete-icon' src='/img/delete.png'/>
      <h4 className='delete-txt light-font'>Delete</h4>
    </div>}
  </div>
)

export default ProductOptionMenu
