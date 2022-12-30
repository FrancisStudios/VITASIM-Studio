/* 
* ABOUT MENU SERVICE
* servicing about menu content
* and backend logic
*/

const { summonNewMessageWindow } = require('../window.module');
const { about } = require('../../data/content.json');

const summonAboutWindow = () => {
    const _messageWindowContent = summonNewMessageWindow(about.title, about.message);
    document.getElementById('workbenchArea').innerHTML = _messageWindowContent;
}

module.exports = summonAboutWindow;