import Game from "./game/game";
import { loop } from "./game/loop";
import * as Cursor from "./game/cursor";

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("mainCanvas");
  const ctx = canvas.getContext("2d");

  canvas.addEventListener('mousemove', (event) => {
    let cursorPos = Cursor.getCursorPos(canvas, event);
    let coords = [cursorPos.x, cursorPos.y]
    console.log(coords); 
  });

  const game = new Game(canvas, ctx);
  window.game = game;
  loop(game);
});

