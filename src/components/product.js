import React from 'react'
import './main.css'
import './product.css'

function Product (props) {
    const {product , onAdd} = props;
    return (
        
        <div className='productCom'>
            <div>
                <img class='img' src={product.img} alt={product.name} />
            </div>
            <div className='name'>{product.name}</div>
            <div className='level'>{product.level}</div>
            <div className='price'>${product.price}</div>
            
            <div>
            <button onClick={() => {onAdd(product)}} className='button' size='50'>Add to cart</button>
            </div>
        </div>
        
    )
}
export default Product