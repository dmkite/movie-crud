function addListener(iterable, trigger, fn){
    let iterables = document.querySelectorAll(iterable)
    iterables.forEach(iter => {
        return iter.addEventListener(trigger, function(e){fn(e)})
    })
    
}

function addMultipleListeners(element, triggerArray, fn){
    triggerArray.forEach( trigger => {
        document.querySelector(element).addEventListener(trigger, fn)
    })
}

function newAlert(title, type) {
    let newAlert = `
    <p class="${type}Alert">${title} has been added</p>`
    document.querySelector('.alertHolder').innerHTML += newAlert
    setTimeout(
        function () {
            document.querySelector(`.${type}Alert`).classList.add('fadeOut')
            setTimeout(
                function () { document.querySelector(`.${type}Alert`).remove() },
                1000
            )
        }, 3000)
}

const posters =
    ['https://image.tmdb.org/t/p/w185_and_h278_bestv2/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/x1txcDXkcM65gl7w20PwYSxAYah.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rWQVj6Z8kPdsbt7XPjVBCltxq90.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rW0A73hjzPWVwADlCTLnjLhAFLX.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/afdZAIcAQscziqVtsEoh2PwsYTW.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/5LYSsOPzuP13201qSzMjNxi8FxN.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/gnTqi4nhIi1eesT5uYMmhEPGNih.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/l76Rgp32z2UxjULApxGXAPpYdAP.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bXs0zkv2iGVViZEy78teg2ycDBm.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/rT49ousKUWN3dV7UlhaC9onTNdl.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/9qYKrgzHbYtKej9Gvd7NxJvGiC2.jpg']

const posterBacks = [
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/x2I7eZNMDZKPUFM6QuKkmHKZDQm.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/MvYpKlpFukTivnlBhizGbkAe3v.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/w4ibr8R702DCjwYniry1D1XwQXj.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/litjsBoiydO6JlO70uOX4N3WnNL.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/v2KnosS7G2M9pMymvX0XXTcf04c.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/msqWSQkU403cQKjQHnWLnugv7EY.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/55W6mUVv4CXMMQHHhV2zXtLSpXQ.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/dOtenLPIbTUZ8dcYKEA7T7qRURz.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/gjAFM4xhA5vyLxxKMz38ujlUfDL.jpg',
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2/qcnOKCPleLOTWPPgYI0YT1MOQwR.jpg']


const windowSize = window.matchMedia("(max-width: 450px)")

function mediaQuery(windowSize){
    const editBtns = document.querySelectorAll('.edit')
    const deleteBtns = document.querySelectorAll('.delete')

    if(windowSize.matches){
        editBtns.forEach(btn => btn.innerHTML = '<i class="material-icons">edit</i>')
        deleteBtns.forEach(btn => btn.innerHTML = '<i class="material-icons">delete</i>')
    }
    else{
        editBtns.forEach(btn => btn.textCtonet = 'edit')
        deleteBtns.forEach(btn => btn.textContent = 'delete') 
    }
}


module.exports = {addListener, newAlert, addMultipleListeners, posters, posterBacks, mediaQuery, windowSize}