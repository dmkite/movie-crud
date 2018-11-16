const server = require('./server-calls')
const create = require('./create')
const { addListener, newAlert } = require('./utils')

///////////////////////////////////////////////////////////////////////////////
//      Initial Setup
//////////////////////////////////////////////////////////////////////////////

function addToTable(){
   return server.getAll()
        .then(data => {
            let htmlArray = HTMLify(data.data.data)
            document.querySelector('.movieTable').innerHTML = ''
            document.querySelector('.movieTable').innerHTML += htmlArray.join('')
            addListener('.delete', 'click', function(e){deleteMovie(e)})
            addListener('.edit', 'click', function(e){createEditPage(e)})
        }) 
}

function HTMLify(arr){
    const result = arr.reduce((acc, item) => {
        item = tablify(item)
        acc.push(item)
        return acc
    }, [])
    return result
}

function tablify(item){
    return `
    <tr id="${item.id}">
        <td>${item.title}</td>
        <td>${item.director}</td>
        <td>${item.year}</td>
        <td>${item.rating}</td>
        <td>
            <button type="button" class="edit btn-small waves-effect">edit</button>
        </td>
        <td>
            <button type="button" class="delete btn-small waves-effect">delete</button>
        </td>
    </tr>`
}


///////////////////////////////////////////////////////////////////////////////
//      Delete Movie
///////////////////////////////////////////////////////////////////////////////

function deleteMovie(e){
    console.log('firing')
    // e.preventDefault()
    const id = e.target.parentElement.parentElement.id
    server.deleteMovie(id)
        .then(data => {
            newAlert(data.data.data[0].title, 'deletion')
            document.querySelector('.movieTable').innerHTML = ''
            return addToTable()
        })
}


///////////////////////////////////////////////////////////////////////////////
//      Edit Movie
///////////////////////////////////////////////////////////////////////////////

function createEditPage(e){
    console.log('firing too')
    const id = e.target.parentElement.parentElement.id
    server.getOne(id)
    .then(data => {
        document.querySelector('body').innerHTML += createEditHTML(data.data.data[0])
        document.querySelector('.cancel').addEventListener('click', function(e){minimize(e)})
        document.querySelector('.confirm').addEventListener('click', function(e){submitChanges(e)})
        addWatchers()
    })
    
    
}

function addWatchers(){
    document.querySelector('#movieRating').addEventListener('mousemove', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keydown', create.changeStars)
    document.querySelector('#movieRating').addEventListener('keyup', create.changeStars)
    document.querySelector('#movieRating').addEventListener('touchmove', create.changeStars)
    document.querySelector('#posterURL').addEventListener('change', function (e) { create.displayPoster(e) })
    document.querySelector('#movieRating').addEventListener('focus', create.highlightStars)
    document.querySelector('#movieRating').addEventListener('focusout', create.unhighlightStars)
}

function createEditHTML(movieInfo){
    return `
    <div class="editPage">
        <div class="row">
            <div class="col s1 m6">
                <div class="posterHolder" style="background-image:url('${movieInfo.poster_url}')"></div>
            </div>

            <div class="col s1 m6">
                <form class="newMovieForm">
                    <input type="text" id="movieTitle" name="title" required value="${movieInfo.title}">
                    <label for="movieTitle">Title</label>

                    <input type="text" id="movieDirector" name="director" required value="${movieInfo.director}">
                    <label for="movieDirector">Director</label>

                    <input type="text" id="movieYear" name="year" required pattern="[0-9]{4}" value="${movieInfo.year}">
                    <label for="movieYear">Year</label>


                    <div class="ratingBox">
                        <span class="stars">
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star</i>
                            <i class="material-icons">star_border</i>
                            <i class="material-icons">star_border</i>
                        </span>
                        <!-- <i class="material-icons">star_half</i>
                        <i class="material-icons">star</i> -->
                        <input id="movieRating" name="rating" type="range" min="1" max="5" step="0.5" value="${movieInfo.rating}">
                        <label for="movieRating">Rating</label>
                    </div>


                    <input type="url" id="posterURL" name="poster_url" required value="${movieInfo.poster_url}">
                    <label for="posterURL">Movie Poster URL</label>
                    <br>
                    <button type="button" id="${movieInfo.id}" class="confirm btn-small waves-effect">confirm</button>
                    <button type="button" class="cancel btn-small waves-effect">cancel</button>
                </form>
            </div>
    </div>`
}

function minimize(e){
    const editPage = document.querySelector('.editPage')
    setTimeout( function(){ 
        editPage.style.animation = 'popOut .3s ease-in'
        addToTable()
        setTimeout(function(){
            editPage.remove()
        }, 300)
    },0)
}

function submitChanges(e){
    const id = Number(e.target.id)
    
    let putBody = create.createPostBody()
    server.editMovie(id, putBody)
    .then(() =>{
        addToTable()
        .then(() => {
            minimize(e)
        })    
    })
    
}




module.exports = {addToTable, newAlert}