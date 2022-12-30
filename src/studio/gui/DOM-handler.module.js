/*
* DOM HANDLER MODULE
* here all DOM events and
* manipulations are controlled
* main logic is in separate
* modules.
*/

const summonAboutWindow = require('./interfaces/about');

$(document).ready(() => {
    /* MENU TRIGGERS */
    $('#about_menu_trigger').on('click', () => {
        summonAboutWindow();
        clearMessageWindowFromWorkbench();
    });
});

/* MESSAGE WINDOW CLOSE HANDLER */
const clearMessageWindowFromWorkbench = () => {
    $('#close-window-action').on('click', () => {
        console.log('click')
        document.getElementById('workbenchArea').innerHTML = "";
    });
}