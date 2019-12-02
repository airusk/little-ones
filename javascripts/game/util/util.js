export const distanceDelta = (startTime, totalTime, rate) =>{
  let timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds
  let distance = rate * timeElapsed / totalTime
  // console.log("time elapsed: "+ timeElapsed);
  // debugger
  return (rate * timeElapsed / totalTime);
}