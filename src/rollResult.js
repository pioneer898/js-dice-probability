class rollResult{
    constructor(providedProperties){
        let defaultProperties = {
            value: null,
            numberOfRolls: 0,
            totalRolls: null
        }
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties);
    }
    increment(){
        const t = this;
        t.numberOfRolls++;
    }
    percentageOfTotal(precision=2){
        const t = this;
        let rollRatio = t.numberOfRolls/t.totalRolls;
        let rollPct = rollRatio*100;
        let raisedToPrecision = rollPct * (Math.pow(10,precision));
        let rounded = Math.round(raisedToPrecision);
        let final = rounded / (Math.pow(10,precision));
        return final;
    }
}

module.exports = rollResult;