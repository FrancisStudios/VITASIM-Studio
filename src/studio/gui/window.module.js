/*
* WINDOW FACTORY MODULE
* blueprints of windows
*/

/*
TODO: Should center windows at opening
*/
const getWorkspaceCenter = () => { return ({width: window.innerWidth / 2, height: window.innerHeight / 2}) }

const summonNewMessageWindow = (title, message) => {
    return (`
        <div class="card bg-secondary border-info mb-3 text-light" style="max-width: 25rem; left: ${getWorkspaceCenter().width-200}px; top: ${getWorkspaceCenter().height-120}px;">
        <div class="card-header"><button type="button" class="btn btn-info btn-sm" id="close-window-action">close</button></div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${message}</p>
        </div>
      </div>
      `)
}

module.exports = {
    summonNewMessageWindow
}