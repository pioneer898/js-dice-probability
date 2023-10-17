const dice = require('./dice.js');
const rollResult = require('./rollResult.js');

class diceProbabilityController{
    constructor(providedProperties){
        let defaultProperties = {
            diceCount: 2,
            diceSides: 6,
            rolls: 1000,
            dice: [],
            results: [],
            randomization: 'pseudo'
        };
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties);

        const t = this;
        for(let i=0;i<t.diceCount;i++){
            t.dice.push(new dice({
                sides: t.diceSides
            }));
        }
        t.minResult = t.diceCount;
        t.maxResult = t.diceCount*t.diceSides;
        
        for(let i=t.minResult;i<=t.maxResult;i++){
            t.results.push(new rollResult({
                value: i,
                totalRolls: t.rolls
            }));
        }
    }
    storeRollResult(value){
        const t = this;
        let rr = t.results.find(e => e.value === value);
        rr.increment();
    }
    async simulateRoll(){
        const t = this;
        let rollTotal = 0;
        for(let d=0;d<t.dice.length;d++){
            let rollValue;
            if(t.randomization === 'pseudo'){
                rollValue = t.dice[d].pseudoRoll();
            } else {
                rollValue = await t.dice[d].cryptoRoll();
            }
            rollTotal += rollValue;
        }
        return rollTotal;
    }
    async run(){
        const t = this;
        for(let i=0;i<t.rolls;i++){
            let rollTotal = await t.simulateRoll();
            t.storeRollResult(rollTotal);
        }
    }
}

module.exports = diceProbabilityController;