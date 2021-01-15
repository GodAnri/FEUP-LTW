// a)

let images = document.querySelectorAll('div#photos ul li');

function changeSrc() {
    let img = document.querySelector('div#photos img.large');

    let src = this.getAttribute('src');

    img.setAttribute('src', 'large/' + src);
}

images.forEach(addEventListener('click', changeSrc));

// b)
let load = document.querySelector('div#photos a.load');

function handleLoad(event) {
    event.preventDefault();

    let req = new XMLHttpRequest();
    req.open('get', 'getrandomimages.php', true);
    req.onload = handleReq;
    req.send();
}

function handleReq() {
    let newimages = JSON.parse(this.responseText);
    let list = document.querySelector('div#photos ul');
    
    newimages.forEach(function (newimage) {
        let item = document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', newimage);
        item.appendChild(image);
        list.appendChild(item);
    });
}

load.addEventListener('click', handleLoad);