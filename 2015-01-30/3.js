// a)
function onClick(event) {
    const guess = document.querySelector('input[name="guess"]');
    tries++;
    if (guess < secret)
        alert("Go up");
    else if (guess > secret)
        alert("Go down");
    else
        correct();
}

document.querySelector('#guess').addEventListener('click', onClick);

// b)
function correct() {
    alert("Correct");
    const username = document.querySelector('input[name="username"]');
    const request = new XMLHttpRequest();
    request.onload = success;
    request.onerror = error;
    request.open('post', 'save_score.php', true);
    request.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({'username':username, 'tries':tries}));
}

function success() {
    alert("Successfully sent.");
}

function error() {
    alert("Error sending.");
}