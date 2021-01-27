// 27
function onLoadHandler(event) {
    const id = document.querySelector('section#tic-tac-toe').getAttribute('data-id');

    const req = new XMLHttpRequest();
    req.onload = requestHandler;
    req.open('post','play.php',true);
    req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    req.send(encodeForAjax({'id': id}));
}

function requestHandler() {
    const response = JSON.parse(this.responseText);
    document.querySelector('section#tic-tac-toe p#state').innerHTML = response.state;
    
    let i = 0;
    document.querySelectorAll('section#tic-tac-toe div.square').forEach(function (elem) {
        elem.innerHTML = response.squares[i];
        i++;
    });
}

document.onload(onLoadHandler);

// 28
let index = 0;
document.querySelectorAll('section #tic-tac-toe div.square').forEach(function (elem) {
    elem.addEventListener('click', function () {
        const id = document.querySelector('section#tic-tac-toe').getAttribute('data-id');

        const req = new XMLHttpRequest();
        req.onload = requestHandler;
        req.open('post','play.php',true);
        req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        req.send(encodeForAjax({'id':id, 'position':index}));
    });
    index++;
});