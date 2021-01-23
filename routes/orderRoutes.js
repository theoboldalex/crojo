const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY)
const { calculateOrderTotal } = require('../helpers.js')

// @desc Create a payment intent object
// @route POST api/v1/create-payment-intent
// @access public
router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body

  res.send(req.body)

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: calculateOrderTotal(items),
  //   currency: 'gbp',
  // })

  // res.status(200).json({ clientSecret: paymentIntent })
})

module.exports = router
