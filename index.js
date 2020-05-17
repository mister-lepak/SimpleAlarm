const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    //inside this curly bracket is where we set callbacks
    //callbacks is useful for communication with other objects or outside items
    onStart(totalDuration){
        duration = totalDuration;
    },
    onComplete(){
        console.log('Timer is completed');
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    }
});
