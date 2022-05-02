const dice = require('../dice.js');

test('Default Has six Sides',()=>{
    var myDice = new dice();
    expect(myDice.sides).toBe(6);
});

test('Numbers 1-6',()=>{
    var myDice = new dice();
    expect(myDice.numbers.toString()).toBe('1,2,3,4,5,6');
});

test('Can have 10 Sides',()=>{
    var myDice = new dice({sides:10});
    expect(myDice.sides).toBe(10);
});

test('Numbers 1-10',()=>{
    var myDice = new dice({sides:10});
    expect(myDice.numbers.toString()).toBe('1,2,3,4,5,6,7,8,9,10');
});

test('Pseudo Roll bewteen 1 and 6',()=>{
    var myDice = new dice();
    var roll = myDice.pseudoRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});

test('Pseudo Roll seems random',()=>{
    var myDice = new dice();
    var rolls = [0,0,0,0,0,0];
    for(var i=0;i<6000;i++){
        var roll = myDice.pseudoRoll();
        rolls[roll-1]++;
    }
    rolls.forEach((el,idx)=>{
        expect(Math.abs(1000-el)).toBeLessThan(200);
    });
});

test('Crypto Roll bewteen 1 and 6',async()=>{
    var myDice = new dice();
    var roll = await myDice.cryptoRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});

test('Crypto Roll seems random',async()=>{
    var myDice = new dice();
    var rolls = [0,0,0,0,0,0];
    for(var i=0;i<6000;i++){
        var roll = await myDice.cryptoRoll();
        rolls[roll-1]++;
    }
    rolls.forEach((el,idx)=>{
        expect(Math.abs(1000-el)).toBeLessThan(200);
    });
});