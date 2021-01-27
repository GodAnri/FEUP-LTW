// b)
const submit = document.querySelector('#register input[type="submit"]');
let username = document.querySelector('#register input[name="username"]');

function handleSubmit(event) {
    event.preventDefault();
    
    const req = new XMLHttpRequest();
    req.open('post','verifyusername.php', true);
    req.onload = handleReq;
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({'username':username}));
}

function handleReq() {
    const response = JSON.parse(this.responseText);

    if (response['valid'] === 'false') {
        username.setAttribute('style','border:1px solid red');
    }
}

submit.addEventListener('click', handleSubmit);