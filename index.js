const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const circle = document.querySelector('circle');

let perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(getDuration) {
        duration = getDuration;
        pauseButton.classList.remove('hide-btn');
        startButton.classList.add('hide-btn');
    },
    onPause() {
        startButton.classList.remove('hide-btn')
        pauseButton.classList.add('hide-btn');
    },
    onTick(getTimer) {
        // console.log('tick tick')
        circle.setAttribute('stroke-dashoffset',
            perimeter * getTimer / duration - perimeter
        );

    },
    onComplete() {
        console.log('time completed')
    }
});