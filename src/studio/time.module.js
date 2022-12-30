/*
* TICK TIMER MODULE
* all timer functions should be 
* included here
*/
const timer = (cb, tickSpeed) => {
    return setInterval(cb, tickSpeed);
}

const timeConverters = {
    tpsToMilliseconds: (targetTPS) => { return 1000 / targetTPS },
    millisecondsToTPS: (milliseconds) => { return 1000 / milliseconds }
}

module.exports = {
    timer,
    timeConverters
}