import * as Ball from "./anims/ball";
import * as Cursor from "./event_listeners/cursor";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;

    // VARS for ball, initialized at x & y
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;

    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);

    this.instigatorPos = [];

    // Cursor Event Listener
    canvas.addEventListener('mousemove', (event) => {
      let cursorPos = Cursor.getCursorPos(canvas, event);
      let coords = [cursorPos.x, cursorPos.y]
      this.instigatorPos = coords;
      console.log(this.instigatorPos);
    });

  }
  initialState() {
    // Rectangle
    this.ctx.beginPath();
    this.ctx.rect(250, 150, 50, 50);
    this.ctx.fillStyle = "#9A0055";
    this.ctx.fill();
    this.ctx.closePath();
    // Rectangle
    this.update();
  }
  update() {
    this.draw();
  }

  draw() {
    const dx = 1;
    const dy = -1;
    // clear before redraw
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Ball.drawBall(this.x, this.y)
    this.x += dx;
    this.y += dy;
  }
} 





// Main Game Loop

export default Game;