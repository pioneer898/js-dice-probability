const crypto = require('crypto');

class dice{
    constructor(providedProperties){
        var defaultProperties = {
            sides: 6
        }
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties)

        var t = this;
        t.numbers = [];
        for(var s=1;s<=t.sides;s++){
            t.numbers.push(s);
        }
    }
    pseudoRoll(){
        var t = this;
        var randomIndex = Math.floor(Math.random()*t.sides);
        return t.numbers[randomIndex];
    }
    async cryptoRoll(){
        var t = this;
        var buf;
        while(typeof(buf) === 'undefined'){
            buf = crypto.randomBytes(1);
        }
        var seed = parseFloat((buf.readUInt8(0))/256);
        var randomIndex = Math.floor(seed*t.sides);
        return t.numbers[randomIndex];
    }
}

module.exports = dice;