// Goal: Roll x dice x times to determine probability spread over sum of die
const timer = require('./timer.js');
const diceProbabilityController = require('./diceProbabilityController.js');


var args = {};
if(typeof(process.argv[2]) !== 'undefined'){
    args.rolls = parseInt(process.argv[2]);
}
if(typeof(process.argv[3]) !== 'undefined'){
    args.diceCount = parseInt(process.argv[3]);
}
if(typeof(process.argv[4]) !== 'undefined'){
    args.diceSides = parseInt(process.argv[4]);
}
if(typeof(process.argv[5]) !== 'undefined'){
    args.randomization = process.argv[5];
}

runSimulation(args);

async function runSimulation(args){
    var myTimer = new timer();
    myTimer.start();
    
    var controller = new diceProbabilityController(args);
    console.log(`Beginning roll simulation. ${controller.rolls} rolls / ${controller.diceCount} dice / ${controller.diceSides} sides per die / ${controller.randomization} randomization`);
    await controller.run();
    
    var resultDisplayArray = [];
    controller.results.forEach((el,idx)=>{
        resultDisplayArray.push({
            Value: el.value,
            Percentage: el.percentageOfTotal(),
            Rolls: el.numberOfRolls
        });
    });
    
    console.table(resultDisplayArray);

    console.log(`Completed in ${myTimer.totalElapsed()/1000} seconds`);
}