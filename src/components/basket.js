import React from 'react'
import './basket.css'

function Basket (props){
    const{cartItems, onAdd,onRemove} = props;
    const itemPrice = cartItems.reduce((a , c) => a + c.price * c.qty , 0);
    const taxPrice =itemPrice * 0.14 ;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;

return (
    <div className='basket'>
        <div className='basket1'>
        <div className='item'>CartItems</div>
        <div className='empty'>
            {cartItems.length === 0 && <div>cart is empty</div>}
        </div>
        </div>
        <div className='All'>
            <div className='All1'>
        {cartItems.map((item) => (
            
            <div className='cartItems'>
            <div>{item.name}</div>
            <div>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div>
                {item.qty} * {item.price} 
            </div>
            </div>
        ))}
        </div>
        <div className='All2'>
        {cartItems.length !== 0 && (
            <div className='items'>
            <div className='price'>itemPrice      : {itemPrice}</div>
            <div className='total'>totalPrice     : {totalPrice}</div>
            <div className='shipping'>shippingPrice  : {shippingPrice}</div>
            <div className='tax'>Taxprice       : {taxPrice}</div>
            </div>
        )}
        </div>
        </div>
        
    </div>
)
    
}
export default Basket