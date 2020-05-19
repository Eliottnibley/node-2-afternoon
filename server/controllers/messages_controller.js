let messages = []
let id = 0

module.exports = {
  createMessage: (req, res) => {
    const {text, time} = req.body

    messages.push({id, text, time})
    id++
    res.status(200).send(messages)
  },

  readMessages: (req, res) => {
    res.status(200).send(messages)
  },

  editMessage: (req, res) => {
    const {text} = req.body
    const id = req.params.id

    const index = messages.findIndex(element => element.id === +id)

    if(index === -1){
      return res.status(404).send('message not found')
    }

    const newMessage = {
      id: +id,
      text: text || messages[index].text,
      time: messages[index].time
    }

    messages[index] = newMessage

    res.status(200).send(messages)
  },

  deleteMessage: (req, res) => {
    const id = req.params.id

    const index = messages.findIndex(element => element.id === +id)

    if(index === -1){
      return res.status(404).send('message not found')
    }

    messages.splice(index, 1)
    res.status(200).send(messages)
  }
}