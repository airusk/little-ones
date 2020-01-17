import Receptor from "../receptor/receptor";

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

export const divineNote = (position, maxLength, maxHeight, numSlices) => {
  let note;
  if (position[1] > maxHeight || position[0] > maxLength) return note;
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];
  const sliceLength = maxLength / numSlices;
  for(let i = 0; i < numSlices + 1; i ++){
    if ((i * sliceLength) > position[0]){
      note = notes[i-1];
      break;
    }
  }
  console.log(note);
  return note;
};

export const playAudio = (filename, mute) => {
  if (!mute){
    const audio = new Audio(`./assets/sounds/${filename}`);
    audio.play();
  }
} 

const randomPos = (maxHeight, maxWidth) => (
  [Math.random() * maxHeight, Math.random() * maxWidth]
);
