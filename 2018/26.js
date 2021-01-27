const items = document.querySelectorAll('section#game ul li');

let input = document.querySelector('section#game input[type="text"]')

function handleClick(event) {
    event.preventDefault();

    if (!div.classList.contains('used'))
    {
        this.classList.add('used');
        input.setAttribute('value', input.getAttribute('value') + this.innerHTML);
    }
}

items.forEach(addEventListener('click', handleClick));