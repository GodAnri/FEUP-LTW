// a)
function handleClick() {
    const qty = parseInt(this.previousSibling.innerHTML) + 1;
    this.previousSibling.innerHTML = qty;    
}

document.querySelectorAll('div#products ul li a').forEach(addEventListener('click', handleClick));

// b)
const buy = document.querySelector('div#products a.buy');

function handleBuy(event) {
    event.preventDefault();

    let products = [];
    const items = document.querySelectorAll('div#products ul li');
    items.forEach(function (item) {
        products.push({"name":item.innerHTML,"qty":item.children[0].innerHTML});
    })

    const req = new XMLHttpRequest();
    req.open('post', 'calculatetotal.php', true);
    req.onload = handleReq;
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax(products));
}

function handleReq() {
    const response = parseInt(JSON.parse(this.responseText));
    
    let total = document.querySelector('div#products p.total')
    if (response < 0)
        total.innerHTML = 'not enough stock';
    else
        total.innerHTML = response;
}

buy.addEventListener('click', handleBuy);