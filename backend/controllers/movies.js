const model = require('../models/movies')

function getAllMovies(req, res){
    const movies = model.getAllMovies()
    res.send({data: movies})
}

module.exports = {getAllMovies}