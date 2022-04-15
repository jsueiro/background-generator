let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background + ';';
}

window.onload = function () {
    css.textContent = 'linear-gradient(to right, #80bcea, #ebedf3);';

}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);