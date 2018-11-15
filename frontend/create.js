


document.querySelector('#movieRating').addEventListener('mousemove', function(){
    const rating = Number(document.querySelector('#movieRating').value)
    const stars = document.querySelectorAll('.material-icons')


    for(let i = 0; i < 5; i++){
       if(i <  Math.floor(rating)) stars[i].textContent = 'star'
       else stars[i].textContent = 'star_border'
    }

    if (rating % 1 !== 0) {
        console.log(rating - 1)
    
        stars[rating - 1.5].textContent = 'star_half'
    }

})

//duplicate for 'touchmove'
console.log('connected')