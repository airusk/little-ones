import * as Animation from "./anims/receptor_animations";
import * as Cursor from "./event_listeners/cursor";
import * as Util from "./util/util";
import Single from "./receptor/single";
import Strum from "./receptor/strum";
import Receptor from "./receptor/receptor";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.sortReceptors = this.sortReceptors.bind(this);
    this.divineNote = this.divineNote.bind(this);
    
    // startTime instantiation for all moving objects
    this.startTime = new Date();
    this.totalTime = 1; // time in seconds
    this.rate = 100; // px to move per totalTime 
    this.cursorPos;
    this.types = ["single", "strum"]
    this.receptors = [];
    this.setInitialState();
    // this.drawBoard();
  }
  setInitialState(){
    this.drawBoard();
    // Cursor event listeners
    this.canvas.addEventListener('mousemove', (event) => {
      let cursorPos = Cursor.getCursorPos(this.canvas, event);
      let coords = [cursorPos.x, cursorPos.y]
      this.cursorPos = coords;
    });
    this.canvas.addEventListener('click', (event) => {
      const note = this.divineNote(this.cursorPos[0], this.canvas.width, 8);
      const receptor = new Single(this.cursorPos, note);
      this.receptors.push(receptor);
    });
    this.canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const receptor = new Strum(this.cursorPos);
      this.receptors.push(receptor);
    });
  }

  update() {
    this.draw();
  }

  draw() {
    // clear before redraw
    // note board
    
    
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // if (this.cursorPos) Animation.drawBall(...this.cursorPos);
    if (this.receptors){
      // this.sortReceptors();
      for (let i = 0; i < this.receptors.length - 1; i++) {
        Animation.drawConnection(
          this.receptors[i].position,
          this.receptors[i + 1].position
        );
      }
      for(let receptor of this.receptors){
        receptor.drawSelf(...receptor.position);
      }
    }
    this.startTime = new Date();
  }

  // Takes in a behavior to apply to receptors
  sortReceptors(){
    this.receptors.sort(function (a, b) {
      if (a.position[0] == b.position[0]) return a.position[1] - b.position[1];
      return a.position[0] - b.position[0];
    });
  }

  drawBoard(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const noteSlice = this.canvas.width/8
    this.ctx.fillStyle = "#3373b3";
    this.ctx.fillRect(0, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#5fb2ef";
    this.ctx.fillRect(noteSlice * 1, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#cc7aa8";
    this.ctx.fillRect(noteSlice * 2, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#32a073";
    this.ctx.fillRect(noteSlice * 3, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#d36027";
    this.ctx.fillRect(noteSlice * 4, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#e79f27";
    this.ctx.fillRect(noteSlice * 5, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#f2e647";
    this.ctx.fillRect(noteSlice * 6, 0, noteSlice, this.canvas.height);
    this.ctx.fillStyle = "#3373b3";
    this.ctx.fillRect(noteSlice * 7, 0, noteSlice, this.canvas.height);
  }
  divineNote(position, maxLength, numSlices) {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];
    const sliceLength = maxLength / numSlices;
    let note;
    for (n in numSlices) {
      if (position > n * sliceLength) {
        note = notes[n - 1];
      }
    }
    return note;
  }
} 

export default Game;