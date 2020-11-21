import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51Gw5AFEPNUxEgFHMsgW5DAaBhrIZGdGaDsRFhFaIwID5Z02cHVoN2tYmfLbUznzoFxobR3s2lhuu94ybnMX8PU3W00O52dUxhp'


    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }

    return (
        <StripeCheckout label= 'Pay Now'
        name="CRWN Clothing Ltd   "
        billingAddress
        shippingAddress
        image = "https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton