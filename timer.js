class Timer{
    constructor(durationInput,startButton,pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.durationInput.addEventListener('input',this.duration);
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start(){
        console.log('timer started');
    }
    pause(){
        console.log('timer paused')
    }
    duration(){
        console.log('duration entered')
    }
    
}

const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');


const timer = new Timer(durationInput, startButton, pauseButton);