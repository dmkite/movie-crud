const knex = require('../database/db')

function getAllMovies(){
    return knex('movies')
        .then(result => {
            console.log(result)
            return result
        })
}

module.exports = {getAllMovies}