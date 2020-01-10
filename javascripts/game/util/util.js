import Receptor from "../receptor/receptor";
import * as Behavior from "../behaviors";

export const distanceDelta = (startTime, totalTime, rate) =>{
  let timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds
  let distance = rate * timeElapsed / totalTime
  // console.log("time elapsed: "+ timeElapsed);
  // debugger
  return (rate * timeElapsed / totalTime);
}

export const receptorGenerator = (total, maxWidth, maxHeight) => {
  let receptors = [];
  for (let i = 0; i < total; i++) {
    const receptor = new Receptor(randomPos(maxWidth,maxHeight), Behavior.repulsion);
    receptors.push(receptor);
  }
  return receptors;
}

export const divineNote = (position, maxLength, numSlices) => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];
  const sliceLength = length / numSlices;
  let note;
  for(n in numSlices){
    if (position > n * sliceLength){
      note = notes[n-1];
    }
  }
  debugger
  return note;
};


const randomPos = (maxHeight, maxWidth) =>(
  [Math.random() * maxHeight, Math.random() * maxWidth]
)