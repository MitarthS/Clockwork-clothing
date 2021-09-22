import './cartIcon.scss';
import React from 'react'
import {ReactComponent as ShopIcon} from '../../assets/cart-icon.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
