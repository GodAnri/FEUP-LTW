let reset = document.querySelector('section#game input[name="reset"]')

let input = document.querySelector('section#game input[type="text"]')
let items = document.querySelectorAll('section#game ul li');


function handleReset(event) {
    event.preventDefault();

    items.forEach(function (elem) {
        itemClass = this.getAttribute('class');
        itemClass.replace('class', '');
        elem.setAttribute('class', itemClass);
    });
    input.value = '';
}

reset.addEventListener('click', handleReset);