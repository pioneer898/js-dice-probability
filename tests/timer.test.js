const timer = require('../timer.js');

const waitMilliseconds = async function(milliseconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}

test('Timer tracks .25 sec',async()=>{
    var myTimer = new timer();
    myTimer.start();
    await waitMilliseconds(250);
    var elapsed = myTimer.totalElapsed()
    
    expect(elapsed).toBeGreaterThanOrEqual(250);
});

test('Timer tracks 0.25 sec step and 0.5 sec elapsed',async()=>{
    var myTimer = new timer();
    myTimer.start();
    await waitMilliseconds(250);
    var stepTime = myTimer.step();
    await waitMilliseconds(250);
    var elapsed = myTimer.totalElapsed()
    
    expect(stepTime).toBeGreaterThanOrEqual(250);
    expect(elapsed).toBeGreaterThanOrEqual(500);
});