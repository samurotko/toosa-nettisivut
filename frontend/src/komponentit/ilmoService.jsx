import axios from 'axios'

const mongoose = require('mongoose')
const baseUrl = "http://localhost:5000/api/ilmos"



const create = async (newObject) => {
    //write to file or db
    
    console.log("posting")
    const response = await axios.post(baseUrl, newObject)
    console.log(response)
    return response.data
 
}

const getAll = async (newObject) => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { create, getAll }