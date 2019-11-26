class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = canvas.width / 2;
    this.y = canvas.height - 30;

    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.drawBall = this.drawBall.bind(this);
    this.update = this.update.bind(this);

    // mainLoop Vars
    this.lastRender;
    this.stopMainLoop;
    this.lastTick = 0;
    this.tickLength = 0;
    this.loop = this.loop.bind(this);
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
    // setInterval(this.draw, 10);
    this.draw();
  }

  draw() {
    const dx = 1;
    const dy = -1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.x += dx;
    this.y += dy;
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  // Main Game Loop
  loop () {
    const mainLoop = (tFrame) => {
      this.stopMainLoop = window.requestAnimationFrame(mainLoop);
      // window.cancelAnimationFrame(this.stopMainLoop);
      var nextTick = this.lastTick + this.tickLength;
      var numTicks = 0;

      if (tFrame > nextTick) {
        var timeSinceTick = tFrame - this.lastTick;
        numTicks = Math.floor(timeSinceTick / this.tickLength);
      }

      queueUpdates(numTicks);
      // render( tFrame );
    }
    const queueUpdates = (numTicks) => {
      for (let i = 0; i < numTicks; i++) {
        this.lastTick = this.lastTick + this.tickLength;
        this.update(this.lastTick);
      }
    }

    this.lastTick = performance.now();
    this.lastRender = this.lastTick;
    this.tickLength = 25;

    // setInitialState();
    mainLoop(performance.now());
  };
} 





// Main Game Loop

export default Game;