const dice = require('./dice.js');
const rollResult = require('./rollResult.js');

class diceProbabilityController{
    constructor(providedProperties){
        var defaultProperties = {
            diceCount: 2,
            diceSides: 6,
            rolls: 1000,
            dice: [],
            results: [],
            randomization: 'pseudo'
        };
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties);

        var t = this;
        for(var i=0;i<t.diceCount;i++){
            t.dice.push(new dice({
                sides: t.diceSides
            }));
        }
        t.minResult = t.diceCount;
        t.maxResult = t.diceCount*t.diceSides;
        
        for(var i=t.minResult;i<=t.maxResult;i++){
            t.results.push(new rollResult({
                value: i,
                totalRolls: t.rolls
            }));
        }
    }
    storeRollResult(value){
        var t = this;
        var rr = t.results.find(e => e.value === value);
        rr.increment();
    }
    async simulateRoll(){
        var t = this;
        var rollTotal = 0;
        for(var d=0;d<t.dice.length;d++){
            if(t.randomization === 'pseudo'){
                var rollValue = t.dice[d].pseudoRoll();
            } else {
                var rollValue = await t.dice[d].cryptoRoll();
            }
            rollTotal += rollValue;
        }
        return rollTotal;
    }
    async run(){
        var t = this;
        for(var i=0;i<t.rolls;i++){
            var rollTotal = await t.simulateRoll();
            t.storeRollResult(rollTotal);
        }
    }
}

module.exports = diceProbabilityController;