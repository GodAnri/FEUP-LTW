const send = document.querySelector('section#game input[name="send"]');

let input = document.querySelector('section#game input[type="text"]');
let itemlist = document.querySelector('section#game ul');

function handleSend(event) {
    event.preventDefault();

    const guess = input.getAttribute('value');

    let req = new XMLHttpRequest();
    req.open('post', 'is_guess_correct.php', true);
    req.onload = handleReq;
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax(guess));
}

function handleReq() {
    const response = JSON.parse(this.responseText);

    if (response["result"] = "wrong") {
        alert("WRONG");
    }
    else {
        itemlist.children.forEach(function (child) {
            itemlist.removeChild(child);
        });
        response["word"].forEach(function (elem) {
            let item = document.createElement('li');
            item.innerHTML = elem;
            itemlist.children.push(item);
        })
    }
}

send.addEventListener('click', handleSend);