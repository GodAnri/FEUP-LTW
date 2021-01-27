function onReset(event) {
    document.querySelector('#game input[type="text"]').setAttribute('value','');
    document.querySelectorAll('#game ul li').forEach(function (elem) {
        if (elem.classList.contains('used'))
            elem.classList.remove('used');
    });
}

document.querySelector('#game input[name="reset"]').addEventListener(onReset);