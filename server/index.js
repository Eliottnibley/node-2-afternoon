const express = require('express')
const app = express()

const SERVER_PORT = 3001

app.use(express.json())



app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`)
})