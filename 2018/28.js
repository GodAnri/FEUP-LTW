let input = document.querySelector('section#game input[type="text"]');
let itemlist = document.querySelector('section#game ul');

function send(event) {
    const guess = document.querySelector('#game input[type="text"]');

    const req = new XMLHttpRequest();
    req.onload = requestHandler;
    req.open('post','is_guess_correct.php',true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({'guess':guess}));
}


function requestHandler() {
    const response = JSON.parse(this.responseText);

    if (response.result === "wrong")
        alert('WRONG');
    else
    {
        document.querySelector('#game input[type="text"]').setAttribute('value','');
        const list = document.querySelector('#game ul');
        list.children.forEach(function (elem) {
            list.removeChild(elem);
        })
        response.word.forEach(function (newletter) {
            const newelem = document.createElement('li');
            newelem.innerHTML = newletter;
            list.appendChild(newelem);
        })
    }
}

document.querySelector('#game input[name="send"]').addEventListener('click',send);