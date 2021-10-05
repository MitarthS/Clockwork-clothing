import './checkout.scss';
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(ci => (
                    <CheckoutItem key={ci.id} cartItem={ci} />
                ))
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
                ** PLEASE USE THE TEST CREDIT CARD FOR PAYMENT ** <br/>
                4242 4242 4242 4242
                Expiry: 01/20
                CVV: 123
            </div>
            <StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
