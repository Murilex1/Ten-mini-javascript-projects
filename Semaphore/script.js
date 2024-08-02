const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const trafficLight = ( event ) => {
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if(colorIndex  < 2) {
        colorIndex++;
    }else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'] ;
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'red': () => img.src = './img/red.png',
    'green': () => img.src = './img/green.png',
    'yellow': () => img.src = './img/yellow.png',
    'automatic': () => setInterval(changeColor,3000)
}

buttons.addEventListener('click',trafficLight);