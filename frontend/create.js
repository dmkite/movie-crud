const server = require('./server-calls')
const movies = require('./movies')
const {newAlert} = require('./utils')

function changeStars(){
    const rating = Number(document.querySelector('#movieRating').value)
    const stars = document.querySelectorAll('.material-icons')

    for (let i = 0; i < 5; i++) {
        if (i <= Math.floor(rating) - 1) {
            stars[i].textContent = 'star'
            continue
        }
        else stars[i].textContent = 'star_border'
    }

    if (rating % 1 !== 0) stars[Math.ceil(rating) - 1].textContent = 'star_half'
}

// document.querySelector('#movieRating').addEventListener('focus', highlightStars)
// document.querySelector('#movieRating').addEventListener('focusout', unhighlightStars)

function highlightStars(){
    let stars = document.querySelectorAll('.ratingBox i')
    stars.forEach(star => star.style.color = '#4db6ac ')
    document.querySelector('.ratingBox label').style.color = '#4db6ac '
}

function unhighlightStars(){
    let stars = document.querySelectorAll('.ratingBox i')
    stars.forEach(star => star.style.color = '#111')
    document.querySelector('.ratingBox label').style.color = '#111'
}

function displayPoster(e){
    let posterURL = e.target.value
    document.querySelector('.posterHolder').style.backgroundImage = `url('${posterURL}')`
}

///////////////////////////////////////////////////////////////////////////////
//      Create Movie
///////////////////////////////////////////////////////////////////////////////

function createMovie(e){
    e.preventDefault()
    let postBody = createPostBody()
    server.createMovie(postBody)
        .then(data => {
            newAlert(data.data.data[0].title, 'creation')
            clearForm()
        })

}

function createPostBody(){
    let inputs = Array.from(document.querySelectorAll('.newMovieForm input'))

    let postBody = inputs.reduce( (acc, input) => {
        acc[input.name] = input.value
        return acc
    }, {})

    return postBody
}


function clearForm(){
    inputs = document.querySelectorAll('.newMovieForm inputs')
    inputs.forEach( input => input.value = '')
    document.querySelector('.posterHolder').style.backgroundImage = ''
}
//duplicate for 'touchmove'

module.exports = {changeStars, displayPoster, createMovie, createPostBody, changeStars, highlightStars, unhighlightStars, displayPoster}