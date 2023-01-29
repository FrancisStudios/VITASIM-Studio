/*
* WINDOW FACTORY MODULE
* blueprints of windows
*/

const getWorkspaceCenter = () => { return ({width: window.innerWidth / 2, height: window.innerHeight / 2}) }

const summonNewMessageWindow = (title, message, _idEnumerator) => {
    return (`
        <div class="card bg-secondary border-info mb-3 text-light" id="messageWindow${_idEnumerator}" style="max-width: 25rem; left: ${getWorkspaceCenter().width-200}px; top: ${getWorkspaceCenter().height-120}px;">
        <div class="card-header" id="messageWindow${_idEnumerator}header"><button type="button" class="btn btn-info btn-sm" id="close-window-action">close</button></div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${message}</p>
        </div>
      </div>
      `);
}

const summonNewQuickPaletteWindow = () => {
  return (`

  `);
}

/* TODO: FINISH TERMINAL WINDOW */
const summonNewTerminalWindow = () => {
  return (`  
  <div class="card bg-dark text-light mb-3" style="max-width: 18rem; top:100px; left: 200px;">
  <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
    <button type="button" class="btn btn-info btn-sm" id="close-window-action">close</button>
    <h6>Terminal</h6>
  </div>
  <div class="card-body">
    <div class="input-group flex-nowrap">
      <span class="input-group-text bg-secondary" id="addon-wrapping">></span>
      <input type="text" class="form-control bg-secondary text-success" placeholder="prompt..." aria-describedby="addon-wrapping">
    </div>
  </div>
</div>
  `);
}

module.exports = {
    summonNewMessageWindow
}