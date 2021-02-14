import React from 'react'
import './header.css'

function Header (props){
    const {countCartItems} = props
    return (<div className='head'>
        
        <div>Small-Shopping-cart</div>
        <div>
        <div>
        cart {' '}
        {countCartItems ? (<button>{countCartItems}</button>) : (' ')}
        </div> 
        <div>signin</div>
        </div>
        
    </div>)
}
export default Header