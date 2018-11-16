function addListener(iterable, trigger, fn){
    let iterables = document.querySelectorAll(iterable)
    iterables.forEach(iter => {
        // return iter.addEventListener(trigger, function(e){fn(e)})
        iter.onclick = function(e){fn(e)}

    })
    console.log(iterables, '***********************************************')
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

module.exports = {addListener, newAlert}