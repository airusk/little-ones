import Game from "./game/game";
import { setupModal } from "./modal";
import { loop } from "./game/loop";

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("main-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas, ctx);
  window.game = game;
  loop(game);
  setupModal();
  console.log("Credit: icons from 'https://www.flaticon.com/authors/freepik'")
});

