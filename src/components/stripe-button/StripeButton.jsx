import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jh8cMSA9gDOK3DBIsqtBp9opj8RAIpNkL8WTDYnLuJouLXSdGCORzvQrpYpXXRWmTHOjeXnfPv2g8ejEfzsvnGH00zTiv9dd7';
    const onToken = (token) => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <StripeCheckout 
        className='button'
        label='Pay now'
        name='Clockwork Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/aq7.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton
