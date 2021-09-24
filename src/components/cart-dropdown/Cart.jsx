import './cart.scss';
import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const Cart = ({dispatch ,cartItems, history}) => {
    const handleClick = () => {
        history.push('/checkout'); dispatch(toggleCartHidden());
    }
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    (cartItems.map(ci => (
                        <CartItem key={ci.id} item={ci}/>
                    ))) : (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(Cart))
