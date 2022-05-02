const diceProbabilityController = require('../diceProbabilityController.js');

test('Has two die by default',()=>{
    var myPc = new diceProbabilityController();
    expect(myPc.dice.length).toBe(2);
});

test('ResultSet Min 2',()=>{
    var myPc = new diceProbabilityController();
    expect(myPc.minResult).toBe(2);
});

test('ResultSet Max 12',()=>{
    var myPc = new diceProbabilityController();
    expect(myPc.maxResult).toBe(12);
});

test('Has 11 Result Possibilities',()=>{
    var myPc = new diceProbabilityController();
    expect(myPc.results.length).toBe(11);
});

test('Roll Results Have Correct Total Rolls',()=>{
    var myPc = new diceProbabilityController({
        rolls: 654
    });
    expect(myPc.results[0].totalRolls).toBe(654);
});

test('Roll Simulate Returns Valid Roll Value',async()=>{
    var myPc = new diceProbabilityController();
    var rollTotal = await myPc.simulateRoll();
    expect(rollTotal).toBeGreaterThanOrEqual(2);
    expect(rollTotal).toBeLessThanOrEqual(12);
});

test('Roll Result Is Stored',async()=>{
    var myPc = new diceProbabilityController();
    var rollTotal = await myPc.simulateRoll();
    myPc.storeRollResult(rollTotal);
    var result = myPc.results.find(e => e.value === rollTotal);
    expect(result.numberOfRolls).toBe(1);
});

test('Rolls 2 Times',async()=>{
    var myPc = new diceProbabilityController({
        rolls: 2
    });
    await myPc.run();
    var rolls = 0;
    myPc.results.forEach((el,idx)=>{
        rolls += el.numberOfRolls;
    });
    expect(rolls).toBe(2);
});

test('Dice have provided number of sides',()=>{
    var myPc = new diceProbabilityController({
        diceSides: 24
    });
    expect(myPc.dice[0].sides).toBe(24);
})