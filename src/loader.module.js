/*
* THIS MODULE WILL BE USED FOR
* preloading elements / models and bigger files
* before user can enter the studio GUI
*/

const remote = require('electron').remote;
const _window = remote.getCurrentWindow();

const LoadAssets = () => {
    const AssetLoader = new Promise(resolve => {
        //placeholder for loader
        setTimeout(resolve, 5000);
    }).then((_metadata)=>{
        _window.close();    
    });
}

module.exports = {
    LoadAssets
}