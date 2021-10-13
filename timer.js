class Timer{
    constructor(durationInput,startButton,pauseButton,callback){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callback){
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
        }
        
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () =>{
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick,1000);
    }
    tick = () =>{
        if(this.getTimer=== 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.setTimer = this.getTimer -1;
            if(this.onTick){
                this.onTick();
            }
        }        
       // console.log('tick tick')
    }
    get getTimer(){
        return parseFloat(this.durationInput.value);
    }
    set setTimer(time){
        this.durationInput.value = time;
    }
    pause=()=>{
        clearInterval(this.interval);
    }
    duration(){
        console.log('duration entered')
    }
    
}