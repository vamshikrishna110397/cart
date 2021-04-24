import React from 'react'
import Product from './product'
import './main.css'

function Main (props) {
    const {products,onAdd} = props 
    return (
        <div className='main'>
            <div className='product'>Products</div>
        <div className='products'>
        {products.map (product => {
           return ( < Product key={product.id} product={product} onAdd={onAdd} className='products' /> )
        })}
        </div>
        </div>
    )
}
export default Main