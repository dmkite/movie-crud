const movies = require('./movies')
const create = require('./create')

// console.log(window.location.href)
if (window.location.href.endsWith('/movies.html')) document.addEventListener('DOMContentLoaded', movies.addToTable)

if (window.location.href.endsWith('/create.html')){ 
    document.querySelector('#movieRating').addEventListener('mousemove', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keydown', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keyup', create.changeStars)
    document.querySelector('#movieRating').addEventListener('touchmove', create.changeStars)
    document.querySelector('#posterURL').addEventListener('change', function (e) { create.displayPoster(e) })
    document.querySelector('.newMovieForm').addEventListener('submit', function(e){create.createMovie(e)})
}