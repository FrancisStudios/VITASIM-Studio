const { App } = require('./config/config.json');
const { version } = require('./package.json');

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('title').innerHTML = `${App.window.title} | v.${version}`;
});
