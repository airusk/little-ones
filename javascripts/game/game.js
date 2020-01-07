import * as Ball from "./anims/ball";
import * as Cursor from "./event_listeners/cursor";
import * as Behaviors from "./behaviors";
import * as Util from "./util/util";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.threshold = 150;
    this.receptors = Util.receptorGenerator(
      5, 
      canvas.height-this.threshold, 
      canvas.width-this.threshold
    );
    this.receptorDelta = 1;
    this.swapReceptorMovement = setInterval(()=> {
      this.receptorDelta *= -1;
    }, 1000);

    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState();
    this.handleBehavior = this.handleBehavior.bind(this);
    // current behavior
    // this.behavior = Behaviors.repulsion;

    // startTime instantiation for all moving objects
    this.startTime = new Date();
    this.totalTime = 1; // time in seconds
    this.rate = 100; // px to move per totalTime 

    

    // Cursor event listeners
    canvas.addEventListener('mousemove', (event) => {
      let cursorPos = Cursor.getCursorPos(canvas, event);
      let coords = [cursorPos.x, cursorPos.y]
      this.instigatorPos = coords;
    });

    canvas.addEventListener('click',(event) =>{
      for (let receptor of this.receptors) {
        if (receptor.behavior === Behaviors.repulsion) receptor.behavior = Behaviors.attraction
        else receptor.behavior = Behaviors.repulsion;
      }
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
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.instigatorPos) Ball.drawBall(...this.instigatorPos);
    for( let receptor of this.receptors){
      Ball.drawBall(...receptor.position);
    }
    this.handleBehavior();
    for (let receptor of this.receptors) {
      receptor.movementPattern(this.receptorDelta);
    }
    this.startTime = new Date();
  }

  // Takes in a behavior to apply to receptors
  handleBehavior(){
    for( let receptor of this.receptors){
      receptor.position = receptor.behavior(
        receptor.position, 
        this.instigatorPos, 
        Util.distanceDelta(this.startTime,this.totalTime,this.rate)
        // this.threshold
      );
    }
  }
} 

export default Game;