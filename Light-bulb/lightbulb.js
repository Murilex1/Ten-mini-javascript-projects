const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const bulb = document.getElementById('bulb');

function isBulbBroken() {
    return bulb.src.indexOf('broken') > -1
}

function bulbOn () {
    if (!isBulbBroken ( )) {
        bulb.src = './img/on.jpg';
    }
}

function bulbOff () {
    if (!isBulbBroken ( )) {    
        bulb.src = './img/off.jpg';
    }    
}

function bulbBroken () {
    if (!isBulbBroken ( )) {    
        bulb.src = './img/broken.jpg'
    }
}

turnOn.addEventListener('click', bulbOn);
turnOff.addEventListener('click', bulbOff);
bulb.addEventListener('mouseover',bulbOn);
bulb.addEventListener('mouseleave', bulbOff);
bulb.addEventListener('dblclick',bulbBroken);