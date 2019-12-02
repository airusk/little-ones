import * as Ball from "./anims/ball";
import * as Cursor from "./event_listeners/cursor";
import * as Behaviors from "./behaviors";
import * as Util from "./util/util";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;

    // VARS for ball, initialized at x & y
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;

    // Cursor/Instigator Position
    this.instigatorPos = [0, 0];
    // Array of receptor coordinates
    this.receptors = [
      [canvas.width, canvas.height],
      [canvas.width / 3, canvas.height - 5]
    ];

    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState();

    this.handleBehavior = this.handleBehavior.bind(this);
    // current behavior
    this.behavior = Behaviors.repulsion;
    // max distance for interation between instigator and receptors.
    this.threshold = 150;

    // startTime instantiation for all moving objects
    this.startTime = new Date();
    this.totalTime = 1; // time in seconds
    this.rate = 100; // px to move per totalTime 

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
  setInitialState(){
    // this.startTime = new Date();
  }

  update() {
    this.draw();
  }

  draw() {
    // clear before redraw
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Ball.drawBall(...this.instigatorPos);
    for( let receptor of this.receptors){
      Ball.drawBall(...receptor);
    }
    this.receptors = this.handleBehavior(this.behavior);
    this.startTime = new Date();
  }

  // Takes in a behavior to apply to receptors
  handleBehavior(behaviorFunc){
    let newPos = [];
    for( let receptor of this.receptors){
      receptor = behaviorFunc(
        receptor, 
        this.instigatorPos, 
        Util.distanceDelta(this.startTime,this.totalTime,this.rate)
        // this.threshold
      );
      newPos.push(receptor);
    }
    return newPos;
  }
} 

export default Game;