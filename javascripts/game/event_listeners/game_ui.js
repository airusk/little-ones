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

  const undoButton = document.getElementById("undo-button");
  undoButton.addEventListener('click', event => {
    game.receptors[game.trackValue].pop();
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
      for (let j = 0; j < 8; j++) {
        document.getElementById(`track-${j}`).disabled = false;
      }
      document.getElementById(`track-${game.trackValue}`).disabled = true;
    });
  }
}

export const soundButtons = (game) => {
  const dogButton = document.getElementById("dog-button");
  dogButton.addEventListener('click', event => {
    game.sound = "dog";
  });
  const catButton = document.getElementById("cat-button");
  catButton.addEventListener('click', event => {
    game.sound = "cat";
  });
  const birdButton = document.getElementById("bird-button");
  birdButton.addEventListener('click', event => {
    game.sound = "bird";
  });
  const goatButton = document.getElementById("goat-button");
  goatButton.addEventListener('click', event => {
    game.sound = "goat";
  });
}