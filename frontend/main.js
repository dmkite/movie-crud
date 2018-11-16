const movies = require('./movies')
const create = require('./create')
const {posters, posterBacks, addMultipleListeners, mediaQuery, windowSize} = require('./utils')

if (!!document.querySelector('.posterPage')){
    
    HTMLPosters = posters.reduce( (acc, poster) => {
        let rand = (Math.floor(Math.random() * posterBacks.length))
        acc.push(`<div class="card-wrapper">
            <div class="card">
                <div class="card-front" style="background-image:url('${poster}')"></div>
                <div class="card-back" style="background-image:url('${posterBacks[rand]}')"></div>
            </div>
        </div>`)
        return acc
    }, [])
    
    document.querySelector('.posterPage').innerHTML = HTMLPosters.join('')

    const flipping = setInterval(
        function(){
            const cards = document.querySelectorAll('.card')
            let rand =  Math.floor(Math.random() * cards.length)
            cards[rand].classList.toggle('do-flip')
        }, 1500)

    const flipping2 = setInterval(
        function () {
            const cards = document.querySelectorAll('.card')
            let rand = Math.floor(Math.random() * cards.length)
            cards[rand].classList.toggle('do-flip')
        }, 3333)
}

if (window.location.href.endsWith('/movies.html')){
    document.addEventListener('DOMContentLoaded', movies.addToTable)
    document.addEventListener('DOMContentLoaded', mediaQuery)
    windowSize.addListener(mediaQuery)

} 

if (window.location.href.endsWith('/create.html')){ 
    addMultipleListeners('#movieRating', ['mousemove', 'keydown', 'keyup', 'touchmove'], create.changeStars)
    document.querySelector('#posterURL').addEventListener('change', function (e) { create.displayPoster(e) })
    document.querySelector('.newMovieForm').addEventListener('submit', function(e){create.createMovie(e)})
    document.querySelector('#movieRating').addEventListener('focus', create.highlightStars)
    document.querySelector('#movieRating').addEventListener('focusout', create.unhighlightStars)
}