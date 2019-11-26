import Game from "./game/game";

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("mainCanvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas, ctx);
  window.game = game;
  // game.initialState();
  game.loop();
});

