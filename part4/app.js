const config = require('./utils/config');
const express = require('express')
require('express-async-errors')
const app = express();
const cors = require('cors')
const errorHandler = require('./utils/error_handler')
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)


console.log('app running')

app.use(errorHandler.errorHandler)
module.exports = app


