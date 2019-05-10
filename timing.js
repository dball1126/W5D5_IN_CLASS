class Clock {
    constructor() {
        this.ourDate = new Date();
        this.hours = (this.ourDate.getHours());
        this.minutes = (this.ourDate.getMinutes());
        this.seconds = (this.ourDate.getSeconds());
        this.printTime();
        // this._tick();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime(){
        console.clear();
        console.log(`${this.hours}::${this.minutes}::${this.seconds}`);
    }

    // _tick(){
    //     setInterval(
    //         function(){this.updatedTime();}.bind(this), 1000);
    // }

    _tick(){
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }
        this.printTime();
    }

}

let x = new Clock();