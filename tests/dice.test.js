const dice = require('../src/dice.js');

test('Default Has six Sides',()=>{
    const myDice = new dice();
    expect(myDice.sides).toBe(6);
});

test('Numbers 1-6',()=>{
    const myDice = new dice();
    expect(myDice.numbers.toString()).toBe('1,2,3,4,5,6');
});

test('Can have 10 Sides',()=>{
    const myDice = new dice({sides:10});
    expect(myDice.sides).toBe(10);
});

test('Numbers 1-10',()=>{
    const myDice = new dice({sides:10});
    expect(myDice.numbers.toString()).toBe('1,2,3,4,5,6,7,8,9,10');
});

test('Pseudo Roll bewteen 1 and 6',()=>{
    const myDice = new dice();
    let roll = myDice.pseudoRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});

test('Pseudo Roll seems random',()=>{
    const myDice = new dice();
    let rolls = [0,0,0,0,0,0];
    for(let i=0;i<6000;i++){
        let roll = myDice.pseudoRoll();
        rolls[roll-1]++;
    }
    rolls.forEach((el,idx)=>{
        expect(Math.abs(1000-el)).toBeLessThan(200);
    });
});

test('Crypto Roll bewteen 1 and 6',async()=>{
    const myDice = new dice();
    let roll = await myDice.cryptoRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});

test('Crypto Roll seems random',async()=>{
    const myDice = new dice();
    let rolls = [0,0,0,0,0,0];
    for(let i=0;i<6000;i++){
        let roll = await myDice.cryptoRoll();
        rolls[roll-1]++;
    }
    rolls.forEach((el,idx)=>{
        expect(Math.abs(1000-el)).toBeLessThan(200);
    });
});