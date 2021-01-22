const express = require('express')
const router = express.Router()
const Product = require('../models/Product.js')

// @desc Get all products
// @route GET api/v1/products
// @access Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({})

    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

// @desc Get a single product by ID
// @route GET api/v1/products/:id
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)

    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

// @desc Create a new product
// @route POST api/v1/products
// @access Private
router.post('/', async (req, res) => {
  const {
    productName,
    productCode,
    price,
    countInStock,
    imageUrl,
    productRating,
    numReviews,
    productDescription,
  } = req.body

  try {
    const newProduct = new Product({
      productName,
      productCode,
      price,
      countInStock,
      imageUrl,
      productRating,
      numReviews,
      productDescription,
    })

    const product = await newProduct.save()

    res.status(201).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

// @desc Update a product by ID
// @route PUT api/v1/products/:id
// @access Private
router.put('/:id', async (req, res) => {
  const {
    productName,
    productCode,
    price,
    countInStock,
    imageUrl,
    productRating,
    numReviews,
    productDescription,
  } = req.body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName,
        productCode,
        price,
        countInStock,
        imageUrl,
        productRating,
        numReviews,
        productDescription,
      },
      { new: true }
    )

    res
      .status(202)
      .json({ updatedProduct, msg: 'Product updated successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

// @desc Delete a product by ID
// @route DELETE api/v1/products/:id
// @access Private
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByIdAndRemove(id)

    res.status(204).json({ msg: 'Product successfully removed' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

module.exports = router
