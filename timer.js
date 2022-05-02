class timer{
    constructor(){
        this.steps = [];
    }
    start(){
        var now = new Date();
        this.steps.push(now);
    }
    totalElapsed(){
        var t = this;
        var now = new Date();
        return now-t.steps[0];
    }
    step(){
        var t = this;
        var now = new Date();
        var lastStep = t.steps[t.steps.length-1];
        t.steps.push(now);
        return now-lastStep;
    }
}

module.exports = timer;