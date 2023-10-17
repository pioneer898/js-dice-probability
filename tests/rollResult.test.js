const rollResult = require('../src/rollResult.js');

test('Has no rolls',()=>{
    const rr = new rollResult();
    expect(rr.numberOfRolls).toBe(0);
});

test('Increments',()=>{
    const rr = new rollResult();
    rr.increment();
    expect(rr.numberOfRolls).toBe(1);
});

test('Calculates Percentage with Default Precision',()=>{
    const rr = new rollResult({
        totalRolls: 10000,
        numberOfRolls: 1234
    });
    expect(rr.percentageOfTotal()).toBe(12.34);
});

test('Calculates Percentage with Provided Precision',()=>{
    const rr = new rollResult({
        totalRolls: 1000000,
        numberOfRolls: 123456
    });
    expect(rr.percentageOfTotal(4)).toBe(12.3456);
});

test('Calculates Percentage with Precision 0',()=>{
    const rr = new rollResult({
        totalRolls: 1000000,
        numberOfRolls: 123456
    });
    expect(rr.percentageOfTotal(0)).toBe(12);
});