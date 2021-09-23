import './customButton.scss'
import React from 'react'

const CustomButton = ({children, isGoogleSignIn, ...otherProps, inverted}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
