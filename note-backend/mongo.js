require('dotenv').config()

const mongoose = require('mongoose')
const url = process.env.MONGODB_URL

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is HARD',
  important: false,
})

// note.save().then(result => {
//   console.log('note saved!')
//   console.log(note)
//   mongoose.connection.close()
// })
Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})