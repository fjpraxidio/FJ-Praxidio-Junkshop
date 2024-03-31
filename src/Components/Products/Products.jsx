import React from 'react'
import './Products.css'
import product_1 from '../../assets/product-1.png'
import product_2 from '../../assets/product-2.png'
import product_icon_1 from '../../assets/product-icon-1.png'
import product_icon_2 from '../../assets/product-icon-2.png'
import white_arrow from '../../assets/white-arrow.png'

const Products = () => {
  return (
    <div className='products container'>
      <div className="product">
            <img src={product_1} alt="" />
            <div className='caption'>
                <img src={product_icon_1} alt="" />
            </div>
        </div>
        <div className="product">
            <img src={product_2} alt="" />
            <div className='caption'>
                <img src={product_icon_2} alt="" />
                <p>WE SELL</p>
            </div>
        </div>
        <button className='btn dark-btn'>See more <img src={white_arrow} alt="" /></button>
    </div>
    
  )
}

export default Products
