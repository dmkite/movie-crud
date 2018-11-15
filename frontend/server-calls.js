const axios = require('axios')
const baseURL = 'http://localhost:3000/movies'

function getAll() {
    return axios.get(baseURL)
        .then(result => {
            return result
        })
}

function deleteMovie(id){
    return axios.delete(`${baseURL}/${id}`)
        .then(result => {
            return result
        })
}

function createMovie(postBody){
    return axios.post(baseURL, postBody)
}

module.exports = {getAll, deleteMovie, createMovie}