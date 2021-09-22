import './cart.scss';
import React from 'react'
import CustomButton from '../custom-button/CustomButton';

const Cart = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default Cart
