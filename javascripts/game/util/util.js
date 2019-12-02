export const distanceDelta = (startTime, totalTime, rate) =>{
  let timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds
  // debugger
  return (rate * timeElapsed / totalTime);
}