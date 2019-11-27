import * as Ball from "./anims/ball";
import * as Cursor from "./event_listeners/cursor";
import * as Behaviors from "./behaviors";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;



    // VARS for ball, initialized at x & y
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;

    // Cursor/Instigator Position
    this.instigatorPos = [];
    // Array of receptor coordinates
    this.receptors = [
      [canvas.width / 2, canvas.height - 30],
      [canvas.width / 3, canvas.height - 5]
    ]

    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);

    this.handleBehavior = this.handleBehavior.bind(this);
    // current behavior
    this.behavior = Behaviors.attraction;


    // Cursor Event Listener
    canvas.addEventListener('mousemove', (event) => {
      let cursorPos = Cursor.getCursorPos(canvas, event);
      let coords = [cursorPos.x, cursorPos.y]
      this.instigatorPos = coords;
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
    // const dx = 1;
    // const dy = -1;
    // clear before redraw
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Ball.drawBall(...this.instigatorPos);
    this.handleBehavior(this.behavior);
    // this.x += dx;
    // this.y += dy;
  }

  // Takes in a behavior to apply to receptors
  handleBehavior(behaviorFunc){
    for( let receptor of this.receptors){
      behaviorFunc(this.instigatorPos, receptor, 3, 1);
    }
  }
} 

export default Game;