const server = require('./server-calls')
const { addListener } = require('./utils')

///////////////////////////////////////////////////////////////////////////////
//      Initial Setup
//////////////////////////////////////////////////////////////////////////////

function addToTable(){
    server.getAll()
        .then(data => {
            let htmlArray = HTMLify(data.data.data)
            document.querySelector('.movieTable').innerHTML += htmlArray.join('')
            addListener('.delete', 'click', deleteMovie)
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
            <button class="edit btn-small waves-effect">edit</button>
        </td>
        <td>
            <button class="delete btn-small waves-effect">delete</button>
        </td>
    </tr>`
}


///////////////////////////////////////////////////////////////////////////////
//      Delete Movie
///////////////////////////////////////////////////////////////////////////////
function deleteMovie(e){
    e.preventDefault()
    const id = e.target.parentElement.parentElement.id
    server.deleteMovie(id)
        .then(data => {
            deletionAlert(data.data.data[0].title)
            document.querySelector('.movieTable').innerHTML = ''
            return addToTable()
        })
}

function deletionAlert(title){
    let newAlert = `
    <p class="alert">${title} has been deleted</p>`
    document.querySelector('body').innerHTML += newAlert
    setTimeout( 
        function(){
            document.querySelector('.alert').classList.add('fadeOut')
            setTimeout(
                function(){ document.querySelector('.alert').remove()},
                1000
            )
        }, 3000)
}

module.exports = {addToTable}