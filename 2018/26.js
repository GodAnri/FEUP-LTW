let items = document.querySelectorAll('section#game ul li');

let input = document.querySelector('section#game input[type="text"]')

function handleClick(event) {
    event.preventDefault();

    let itemclass = this.getAttribute('class');
    if (itemclass.match(/used/) === null) {
        itemclass += ' used';
        input.value += this.innerHTML;
    }
}

items.forEach(addEventListener('click', handleClick));