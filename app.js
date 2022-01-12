const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')
//const middlewares  = require('./middlewares');
const config = require('./config')
const blogsRouter = require('./ilmo')

const mongoUrl = config.MONGO_URL
console.log('connecting to', mongoUrl, typeof mongoUrl)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })



const app = express()
app.use(express.json())
app.use(cors())
//app.use(middlewares.tokenExtractor)
app.use(express.static('build'))
app.use('/api/ilmos', blogsRouter)
//app.use('/api/users', usersRouter)
//app.use('/api/login', loginRouter)



app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})



module.exports=app