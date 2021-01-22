const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')

//CONFIG//
dotenv.config()
connectDB()
app.use(express.json({ extended: false }))

//API_TEST_ENDPOINT//
app.get('/', (req, res) => {
  res.json('Welcome to the Crojo API')
})

//ROUTES//
app.use('/api/v1/products', require('./routes/productRoutes.js'))

//SERVER//
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server listening in ${process.env.NODE_ENV} mode on port ${PORT}...`
  )
)
