/* 
* ABOUT MENU SERVICE
* serving about menu content
* and backend logic / data
*/

const { summonNewMessageWindow } = require('../window.module');
const { about } = require('../../data/content.json');

const summonAboutWindow = (_idEnumerator) => {
    const _messageWindowContent = summonNewMessageWindow(about.title, about.message, _idEnumerator);
    document.getElementById('workbenchArea').innerHTML += _messageWindowContent;
}

module.exports = summonAboutWindow;