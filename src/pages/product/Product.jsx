import React from 'react'
import Sidebar from "./../../components/sidebar/Sidebar"
import Navbar from "./../../components/navbar/Navbar"
import "./product.scss"
import ProductTable from '../../components/productTable/ProductTable'

const Product = () => {
  return (
    <div className='product'>
      <Sidebar/>
      <div className='productContainer'>
        <Navbar/>
        <div className='productList'>
          <div className='datatableTitle'>
            <span>Add New Products</span>
            <span className='link'>Add New</span>
          </div>
          <ProductTable/>
        </div>
      </div>
    </div>
  )
}

export default Product