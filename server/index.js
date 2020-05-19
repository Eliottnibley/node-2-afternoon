const express = require('express')
const app = express()
const ctlr = require('./controllers/messages_controller')

const SERVER_PORT = 3001

app.use(express.json())

app.post('/api/messages', ctlr.createMessage)
app.get('/api/messages', ctlr.readMessages)
app.put('/api/messages/:id', ctlr.editMessage)
app.delete('/api/messages/:id', ctlr.deleteMessage)

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`)
})