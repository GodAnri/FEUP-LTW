// a)
const numbers = document.querySelectorAll('#keypad a');
let input = document.querySelector('#pin input[name="pin"]');

function handleClick(event) {
    event.preventDefault();
    input.setAttribute('value', input.getAttribute('value') + this.innerHTML);
}

numbers.forEach(addEventListener('click', handleClick));


// b)
const username = document.querySelector('#pin input[name="username"]');
const submit = document.querySelector('#pin input[type="submit"]');

function handleSubmit(event) {
    event.preventDefault();

    const req = new XMLHttpRequest();
    req.onload(handleReq);
    req.open('post','verify_pin.php', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({'username':username,'pin':input}));
}

function handleReq() {
    const response = JSON.parse(this.responseText);
    if (response["valid"] === "false")
    {
        input.setAttribute('value', '');
        input.setAttribute('style', 'border:2px solid red');
    }
}

submit.addEventListener('click', handleSubmit);