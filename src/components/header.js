import React from 'react'
import './header.css'

function Header (props){
    const {countCartItems} = props
    return (<div className='head'>
        
        <div class='shopping'>Small-Shopping-cart</div>
        <div>
 
        <div class='sign'>signin</div>
        <div class='cart'>

{countCartItems ? (<button class='count'>{countCartItems}</button>) : (' ')}
cart {' '}
</div>
        </div>
        
    </div>)
}
export default Header