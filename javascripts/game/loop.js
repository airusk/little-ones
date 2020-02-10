export const loop = (game) => {
  const mainLoop = (tFrame) => {
    game.stopMainLoop = window.requestAnimationFrame(mainLoop);
    var nextTick = game.lastTick + game.tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - game.lastTick;
      numTicks = Math.floor(timeSinceTick / game.tickLength);
    }

    queueUpdates(numTicks);
  }
  const queueUpdates = (numTicks) => {
    for (let i = 0; i < numTicks; i++) {
      game.lastTick = game.lastTick + game.tickLength;
      game.update(game.lastTick);
    }
  }

  game.lastTick = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 16;

  mainLoop(performance.now());
};