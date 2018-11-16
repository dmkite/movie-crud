const movies = require('./movies')
const create = require('./create')
const posters = require('./posters')
// console.log(window.location.href)
if (window.location.href.endsWith('/index.html')){
    
    HTMLPosters = posters.reduce( (acc, poster) => {
        let rand = (Math.floor(Math.random() * posters.length))
        acc.push(`<div class="card-wrapper">
            <div class="card">
                <div class="card-front" style="background-image:url('${poster}')"></div>
                <div class="card-back" style="background-image:url('${posters[rand]}')"></div>
            </div>
        </div>`)
        return acc
    }, [])
    
    console.log(HTMLPosters)
    document.querySelector('.posterPage').innerHTML = HTMLPosters.join('')

    const flipping = setInterval(
        function(){
            const cards = document.querySelectorAll('.card')
            let rand =  Math.floor(Math.random() * 15) + 15
            console.log(rand)
            cards[rand].classList.toggle('do-flip')
        }, 1500)

    const flipping2 = setInterval(
        function () {
            const cards = document.querySelectorAll('.card')
            let rand = Math.floor(Math.random() * cards.length)
            console.log(rand)
            cards[rand].classList.toggle('do-flip')
        }, 3333)
}

if (window.location.href.endsWith('/movies.html')) document.addEventListener('DOMContentLoaded', movies.addToTable)

if (window.location.href.endsWith('/create.html')){ 
    document.querySelector('#movieRating').addEventListener('mousemove', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keydown', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keyup', create.changeStars)
    document.querySelector('#movieRating').addEventListener('touchmove', create.changeStars)
    document.querySelector('#posterURL').addEventListener('change', function (e) { create.displayPoster(e) })
    document.querySelector('.newMovieForm').addEventListener('submit', function(e){create.createMovie(e)})
    document.querySelector('#movieRating').addEventListener('focus', create.highlightStars)
    document.querySelector('#movieRating').addEventListener('focusout', create.unhighlightStars)
}