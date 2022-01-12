const app = require('./app')
const http = require('http')
const config = require('./config')




const server = http.createServer(app)


const PORT = config.PORT
const HOST = config.HOST
app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}, host ${HOST}`)
})