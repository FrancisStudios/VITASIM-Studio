/*
* MAIN MODULE
* the main dataflow should be 
* included here and hard logic
* should be moved into small
* modules across the project.
*/

/* IMPORTS SECTION */
const { timer } = require('./time.module');
const isTimeStarted = true;
const isUpdateAllowed = true;

/* PROGRAM SECTION */
timer(() => {
    if (isTimeStarted && isUpdateAllowed) {

    }
}, 1000)
