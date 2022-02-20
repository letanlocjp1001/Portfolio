const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 8001

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Portfolio' })
})

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`))
