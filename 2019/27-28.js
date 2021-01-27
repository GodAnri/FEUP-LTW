// 27
const divs = document.querySelectorAll('section#tic-tac-toe div.square');

function loaded(event) {
    const id = document.querySelector('section#tic-tac-toe').getAttribute('data-id');

    let req = new XMLHttpRequest();
    req.onload = handleReq;
    req.open('post','play.php', true);
    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    request.send(encodeForAjax({'id':id}));
}

function handleReq() {
    const response = JSON.parse(this.responseText);

    let i = 0;
    divs.forEach(function (square) {
        square.innerHTML = response.squares[i];
        i++;
    })
    
    let statep = document.querySelector('#tic-tac-toe #state');
    statep.innerHTML = response.state;
}

document.onload(loaded);

// 28

for(let i = 1; i < 9; i++){
    divs[i].addEventListener("click", function (event) {
        event.preventDefault();

        const id = document.querySelector('section#tic-tac-toe').getAttribute('data-id');

        let req = XMLHttpRequest();
        req.onload = handleReq;
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        request.send(encodeForAjax({'id':id, 'position':i}));
    });
}

divs.forEach(addEventListener('click', handleClick));