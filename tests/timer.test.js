const timer = require('../src/timer.js');

const waitMilliseconds = async function(milliseconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}

test('Timer tracks .25 sec',async()=>{
    const myTimer = new timer();
    myTimer.start();
    await waitMilliseconds(250);
    expect(myTimer.totalElapsed()).toBeGreaterThanOrEqual(250);
});

test('Timer tracks 0.25 sec step and 0.5 sec elapsed',async()=>{
    const myTimer = new timer();
    myTimer.start();
    await waitMilliseconds(250);
    let stepTime = myTimer.step();
    await waitMilliseconds(250);
    let elapsed = myTimer.totalElapsed()
    
    expect(stepTime).toBeGreaterThanOrEqual(250);
    expect(elapsed).toBeGreaterThanOrEqual(500);
});