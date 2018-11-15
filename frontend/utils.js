function addListener(iterable, trigger, fn){
    let iterables = document.querySelectorAll(iterable)
    iterables.forEach(iter => {
        iter.addEventListener(trigger, function(e){fn(e)})
    })
}

module.exports = {addListener}