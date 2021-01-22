const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')

//CONFIG//
dotenv.config()
connectDB()
app.use(express.json({ extended: false }))

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
