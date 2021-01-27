function onClick(event) {
    if (!this.classList.contain('used'))
        this.classList.add('used');
    const input = document.querySelector('game input[type="text"]');
    input.setAttribute('value', input.getAttribute('value') + this.innerHTML);
}

document.querySelectorAll('#game ul li').forEach(addEventListener('click', onClick));