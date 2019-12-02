export const loop = (game) => {
  const mainLoop = (tFrame) => {
    game.stopMainLoop = window.requestAnimationFrame(mainLoop);
    // window.cancelAnimationFrame(game.stopMainLoop); // Function to reset game without refresh
    var nextTick = game.lastTick + game.tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - game.lastTick;
      numTicks = Math.floor(timeSinceTick / game.tickLength);
    }

    queueUpdates(numTicks);
    // render( tFrame );
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

  // game.setInitialState(); // performs whatever tasks are leftover before the mainloop must run.
  mainLoop(performance.now());
};