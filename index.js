const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');


const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        console.log('timer started')
    },
    onTick(){
        console.log('tick tick')
    },
    onComplete(){
        console.log('time completed')
    }
});