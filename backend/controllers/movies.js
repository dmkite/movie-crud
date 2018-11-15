const model = require('../models/movies')

function getAllMovies(req, res, next){
    return model.getAllMovies()
        .then(result => {
            res.send({ data: result })
        })
        .catch(error => {
            next(error)

            /////////////////////////////////////////////////////
            //          can just write .catch(next)
            ////////////////////////////////////////////////////
        })
}

function getOneMovie(req, res, next) {
    const id = req.params.id
    return model.getOneMovie(id)
        .then(result => {
            if(!result.length) return next({status:404, message:'The movie you\'re looking for isn\'t here'})
            res.send({data: result})
        })
        .catch(error => {
            next(error)
        })
}

function createMovie(req, res, next){
    const {director, poster_url, rating, title, year} = req.body
    if (!director || !poster_url || !rating || !title || !year) return next({status: 400, message: 'You must provide all fields'})
    return model.createMovie(req.body)
        .then(result => {
            res.send({data:result})
        })
        .catch(error => {
            next(error)
        })
}

function editMovie(req, res, next){
    const id = req.params.id
    return model.editMovie(id, req.body)
        .then(result => {
            if (!result) return next({ status: 404, message: 'The movie you\'re looking for isn\'t here' })
            res.send({data:result})
        })
        .catch(error => {
            next(error)
        })
}

function deleteMovie(req, res, next){
    const id = req.params.id
    return model.deleteMovie(id)
        .then(result => {
            if (!result) return next({ status: 404, message: 'The movie you\'re looking for isn\'t here' })
            res.send({data:result}) 
        })
        .catch(error => {
            next(error)
        })
}


module.exports = {getAllMovies, getOneMovie, createMovie, editMovie, deleteMovie}