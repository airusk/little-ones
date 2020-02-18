import * as Animation from "./anims/receptor_animations";
import * as Cursor from "./event_listeners/cursor";
import * as Util from "./util/util";
import * as UI from "./event_listeners/game_ui";
import Bark from "./receptor/bark";
import Meow from "./receptor/meow";
import Chirp from "./receptor/chirp";
import Bleat from "./receptor/bleat";
import Receptor from "./receptor/receptor";

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.overlayCanvas = document.getElementById("overlay-canvas");
    this.overlayCtx = this.overlayCanvas.getContext("2d");
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.sortReceptors = this.sortReceptors.bind(this);
  
    // this.startTime = new Date();
    // this.totalTime = 0; // time in seconds
    // this.rate = 100; // px to move per totalTime 
    
    // startTime instantiation for all objects
    this.panelWidth = this.canvas.width;
    this.panelHeight = this.canvas.height;
    this.cursorPos;
    this.receptors = [[],[],[],[],[],[],[],[]];
    this.trackValue = 0;
    this.solo = false;
    this.mute = false;
    this.sounds = {dog: Bark, cat: Meow, bird: Chirp, goat: Bleat};
    this.sound = "dog";
    this.outlinePositions = [];
    this.setInitialState();
  }
  setInitialState(){
    this.setupEventListeners();
  }

  update() {
    this.draw();
  }

  draw() {
    this.drawBoard(this.panelWidth, this.panelHeight);
    if (this.receptors){
      for (let i = 0; i < this.receptors.length; i++) {
        for (let j = 0; j < this.receptors[i].length - 1; j++) {
          const arr = this.receptors[i];
          Animation.drawConnection(
            arr[j].position,
            arr[j + 1].position
          );
        }
        for (let receptor of this.receptors[i]) {
          receptor.drawSelf(...receptor.position);
        }
      }
      for (let i = 0; i < this.receptors[this.trackValue].length - 1; i++) {
        Animation.drawActiveConnection(
          this.receptors[this.trackValue][i].position,
          this.receptors[this.trackValue][i + 1].position
        );
      }
      for (let receptor of this.receptors[this.trackValue]){
        receptor.drawSelf(...receptor.position);
      }
      for(let outlinePos of this.outlinePositions){
        Animation.drawOutline(...outlinePos);
      }
    }
    this.startTime = new Date();
  }

  sortReceptors(){
    this.receptors[this.trackValue].sort(function (a, b) {
      if (a.position[0] == b.position[0]) return a.position[1] - b.position[1];
      return a.position[0] - b.position[0];
    });
  }

  drawBoard(panelWidth, panelHeight){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const noteSlice = panelWidth/8;
    this.ctx.fillStyle = "#3373b3";
    this.ctx.fillRect(0, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#5fb2ef";
    this.ctx.fillRect(noteSlice * 1, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#cc7aa8";
    this.ctx.fillRect(noteSlice * 2, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#32a073";
    this.ctx.fillRect(noteSlice * 3, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#d36027";
    this.ctx.fillRect(noteSlice * 4, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#e79f27";
    this.ctx.fillRect(noteSlice * 5, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#f2e647";
    this.ctx.fillRect(noteSlice * 6, 0, noteSlice, panelHeight);
    this.ctx.fillStyle = "#3373b3";
    this.ctx.fillRect(noteSlice * 7, 0, noteSlice, panelHeight);
  }

  setupEventListeners(){
    // Cursor event listeners
    // overlay canvas event listeners
    this.overlayCanvas.addEventListener('mousemove', (event) => {
      let cursorPos = Cursor.getCursorPos(this.overlayCanvas, event);
      let coords = [cursorPos.x, cursorPos.y]
      this.cursorPos = coords;
    });
    this.overlayCanvas.addEventListener('click', (event) => {
      const note = Util.divineNote(this.cursorPos, this.panelWidth, this.panelHeight, 8);
      if (note) {
        // const receptor = new Bark(this.cursorPos, note);
        const receptor = new this.sounds[this.sound](this.cursorPos, note);
        Util.playAudio(receptor.soundFile,this.mute);
        this.receptors[this.trackValue].push(receptor);
      }
    });
    this.overlayCanvas.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const note = Util.divineNote(this.cursorPos, this.panelWidth, this.panelHeight, 8);
      if (note) {
        const receptor = new Meow(this.cursorPos, note);
        Util.playAudio(receptor.soundFile, this.mute);
        this.receptors[this.trackValue].push(receptor);
      }
    });
    UI.setupGameUI(this);
    UI.trackSwitches(this);
    UI.soundButtons(this);
  }

  playAll(audioArray){
    let index = 0;
    const playAudio = (index) => { 
      if (index > audioArray.length-1) return;
      const receptor = audioArray[index];
      this.outlinePositions.push(receptor.position);
      if(!this.mute){
        const currentAudio = new Audio(`./assets/sounds/${receptor.soundFile}`);
        currentAudio.play();
      }
      setTimeout(() => {
        this.outlinePositions.shift();
        this.overlayCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ++index;
        playAudio(index);
      }, 500);
    }
    playAudio(index);
  }
} 

export default Game;