import axios from 'axios'

const mongoose = require('mongoose')
const baseUrl = process.env.REACT_APP_BASE_URL
//process.env.BASE_URL
//"http://localhost:5000/api/ilmos"
//const baseUrl = "inkubio.fi/apoptoosi" 


const create = async (newObject) => {
    //write to file or db
    //console.log("baseURI",baseUrl)
    //console.log("posting")
    try {
    const response = await axios.post(baseUrl, newObject)
    //console.log(response)
    alert(`Ilmoittautuminen onnistui!`)
    return response.data
    } catch (error) {
        alert("ilmoittauminen epäonnistui: " + error)
    }
    
 
}

const getAll = async (newObject) => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { create, getAll }