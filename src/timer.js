class timer{
    constructor(){
        this.steps = [];
    }
    start(){
        let now = new Date();
        this.steps.push(now);
    }
    totalElapsed(){
        const t = this;
        let now = new Date();
        return now-t.steps[0];
    }
    step(){
        const t = this;
        let now = new Date();
        let lastStep = t.steps[t.steps.length-1];
        t.steps.push(now);
        return now-lastStep;
    }
}

module.exports = timer;