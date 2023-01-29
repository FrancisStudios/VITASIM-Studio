/*
* DOM HANDLER MODULE
* here all DOM events and
* manipulations are controlled
* main logic is in separate
* modules.
*/

const summonAboutWindow = require('./interfaces/about');
const summonQuickPaletteWindow = require('./interfaces/quic-palette');
const moveWindowComponent = require('./dragger.module');

/* ID POOL */
const windowIdentifierPool = {
    id: 0,
    get last() { this.id++; return this.id}
}

$(document).ready(() => {
    /* MENU TRIGGERS */
    $('#about_menu_trigger').on('click', () => {
        const messageWindowId = windowIdentifierPool.last;
        summonAboutWindow(messageWindowId);
        clearMessageWindowFromWorkbench(messageWindowId);
        dispatchMoveHandlerToMessageWindow(messageWindowId);
    });

    $('#quickpalette_menu_trigger').on('click', ()=>{
        //summonQuickPaletteWindow();
    })
});

/* MESSAGE WINDOW CLOSE HANDLER DISPATCH */
const clearMessageWindowFromWorkbench = (id) => {
    $('#close-window-action').on('click', () => {
        //document.getElementById('workbenchArea').innerHTML = "";
        var messageWindow = document.getElementById(`messageWindow${id}`);
        messageWindow.parentNode.removeChild(messageWindow);
    });
}

/* MESSAGE WINDOW MOVE HANDLER DISPATCH */
const dispatchMoveHandlerToMessageWindow = (id) => {
    moveWindowComponent(document.getElementById(`messageWindow${id}`));
}