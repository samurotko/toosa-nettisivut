require('dotenv').config()

let PORT = process.env.PORT || 5000
let MONGO_URL = process.env.MONGO_URL 
let HOST = process.env.MY_HOST || '0.0.0.0'
let BASE_URL = process.env.BASE_URL || "http://localhost:5000/api/ilmos"


module.exports = {
  MONGO_URL,
  PORT,
  HOST,
  BASE_URL
}