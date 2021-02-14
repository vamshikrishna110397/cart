import React from 'react'
import './main.css'
import './product.css'

function Product (props) {
    const {product , onAdd} = props;
    return (
        <div className='main1'>
        <div className='productCom'>
            <div className='name'>{product.name}</div>
            <div className='level'>{product.level}</div>
            <div className='price'>{product.price}</div>
            <div>{product.img}</div>
            
            <div>
            <button onClick={() => {onAdd(product)}} className='button' size='50'>Add to cart</button>
            </div>
        </div>
        </div>
    )
}
export default Product