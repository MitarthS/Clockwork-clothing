import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/clockwork.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import Cart from '../cart-dropdown/Cart'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { selectCartHidden } from '../../redux/cart/cartSelectors'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo className="logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signIn'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {hidden ? null : <Cart/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);