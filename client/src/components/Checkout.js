import React, { useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { getFromAPI } from './Helper'

export function Checkout() {
  const stripe = useStripe()
  const [product, setProduct] = useState({
    name: 'Hat',
    description: 'Pug hat.A hat your pug will love.',
    images: [
      'https://www.decathlon.in/p/8366535/outdoor-camo-caps-hats-and-belts/felt-hat-green?id=8366535&type=p',
    ],
  })
  const changeQuantity = (v) =>
    setProduct({ ...product, quantity: Math.max(0, product.quantity + v) })

  const handleClick = async (e) => {
    const body = { line_items: [product] }
    const { id: sessionId } = await getFromAPI('checkouts', {
      body,
    })

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    })
    if (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <h3>{product.name}</h3>
        <h4>Stripe Amount: {product.amount}</h4>

        <img src={product.images[0]} width="250px" alt="product" />
        <button onClick={() => changeQuantity(-1)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => changeQuantity(1)}>+</button>
      </div>
      <hr />
      <button onClick={handleClick} disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </>
  )
}

export function CheckoutFail() {
  return <h3>Checkout Failed</h3>
}

export function CheckoutSuccess() {
  const url = window.location.href
  const sessionId = new URL(url).searchParams.get('session_id')
  return <h3>Checkout was a success {sessionId}</h3>
}
