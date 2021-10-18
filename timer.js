class Timer{
    constructor(durationInput,startButton,pauseButton,callback){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callback){
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
            this.onPause = callback.onPause;
        }
        
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () =>{
        if(this.onStart){
            this.onStart(this.getTimer);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
    }
    tick = () =>{
        if(this.getTimer <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.getTimer = this.getTimer - 0.02;
            if(this.onTick){
                this.onTick(this.getTimer);
            }
        }        
       // console.log('tick tick')
    }
    get getTimer(){
        return parseFloat(this.durationInput.value);
    }
    set getTimer(time){
        this.durationInput.value = time.toFixed(2);
    }
    pause=()=>{
        if(this.onPause){
            this.onPause();
        };
        clearInterval(this.interval);
    }
    duration(){
        console.log('duration entered')
    }
    
}