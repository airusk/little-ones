export const setupGameUI = (game) => {
  const playButton = document.getElementById("play-button");
  playButton.addEventListener('click', (event) => {
    if (game.solo === true) {
      game.playAll(game.receptors[game.trackValue]);
    } else {
      for (let arr of game.receptors) {
        game.playAll(arr);
      }
    }
  });
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener('click', event => {
    game.receptors[game.trackValue] = [];
  });

  const clearAllButton = document.getElementById("clear-all-button");
  clearAllButton.addEventListener('click', event => {
    game.receptors = [[], [], [], [], [], [], [], []];
  });

  const soloBox = document.getElementById("solo-box");
  soloBox.addEventListener('change', event => {
    game.solo = event.target.checked ? true : false;
  });

  const muteBox = document.getElementById("mute-box");
  muteBox.addEventListener('change', event => {
    game.mute = event.target.checked ? true : false;
  });

};

export const trackSwitches = (game) => {
  for(let i = 0; i < 8; i++){
    const track = document.getElementById(`track-${i}`)
    track.addEventListener('click', (event) => {
      game.trackValue = i;
    });
  }
}