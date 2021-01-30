// a)
function onClick(event) {
    document.querySelector('div.box').setAttribute('background-color', document.querySelector('input[name="color"]').value);
}

document.querySelector('#copy').addEventListener('click', onClick);

// b)
function send(event) {
    const req = new XMLHttpRequest();
    req.open('post','http://www.coloranalyzer.com',true);
    req.onload = reqHandler;
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({'color':document.querySelector('input[name="color"]').value}));
}

function reqHandler() {
    const response = JSON.parse(this.responseText);
    document.querySelector('div.box').innerHTML = response.result;
}

document.querySelector('#send').addEventListener('click', send);