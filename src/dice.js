const crypto = require('crypto');

class dice{
    constructor(providedProperties){
        let defaultProperties = {
            sides: 6
        }
        Object.assign(this,defaultProperties);
        Object.assign(this,providedProperties)

        const t = this;
        t.numbers = [];
        for(let s=1;s<=t.sides;s++){
            t.numbers.push(s);
        }
    }
    pseudoRoll(){
        const t = this;
        let randomIndex = Math.floor(Math.random()*t.sides);
        return t.numbers[randomIndex];
    }
    async cryptoRoll(){
        const t = this;
        let buf;
        while(typeof(buf) === 'undefined'){
            buf = crypto.randomBytes(1);
        }
        let seed = parseFloat((buf.readUInt8(0))/256);
        let randomIndex = Math.floor(seed*t.sides);
        return t.numbers[randomIndex];
    }
}

module.exports = dice;