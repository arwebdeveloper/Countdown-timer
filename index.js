const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const circle = document.querySelector('circle');

let perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(getDuration){
        duration = getDuration;
    },
    onTick(getTimer){
        // console.log('tick tick')
        circle.setAttribute('stroke-dashoffset',
        perimeter * getTimer / duration - perimeter
        );
       
    },
    onComplete(){
        console.log('time completed')
    }
});