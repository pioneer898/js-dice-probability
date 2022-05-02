class rollResult{
    constructor(providedProperties){
        var defaultProperties = {
            value: null,
            numberOfRolls: 0,
            totalRolls: null
        }
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties);
    }
    increment(){
        var t = this;
        t.numberOfRolls++;
    }
    percentageOfTotal(precision=2){
        var t = this;
        var rollRatio = t.numberOfRolls/t.totalRolls;
        var rollPct = rollRatio*100;
        var raisedToPrecision = rollPct * (Math.pow(10,precision));
        var rounded = Math.round(raisedToPrecision);
        var final = rounded / (Math.pow(10,precision));
        return final;
    }
}

module.exports = rollResult;