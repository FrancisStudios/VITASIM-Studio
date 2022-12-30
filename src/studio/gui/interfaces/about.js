/* 
* ABOUT MENU SERVICE
* servicing about menu content
* and backend logic
*/

const { summonNewMessageWindow } = require('../window.module');

const summonAboutWindow = () => {
    const _messageWindowContent = summonNewMessageWindow('about...', 'About VITASIM Studio', 'VITASIM Studio is the best life simulator studios out there.');
    document.getElementById('workbenchArea').innerHTML = _messageWindowContent;
}

module.exports = summonAboutWindow;