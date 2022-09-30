import { useState } from "react";
import "./App.css";

let adjustInterval= undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted]= useState(false);

  const startWatch = () => {
 adjustInterval=
setInterval( () => {
      //setWatch(watch);
     setWatch((s)=>s+1)
    },1000)
    setStarted(true)
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };
  const resetWatch = () => {
    setWatch(0)
    clearInterval(adjustInterval);
    setStarted(false);
  };
  return (
    <div className="App">
      <h1 className="title">Stop Watch</h1>
      <h1 style= {{color:"blue", fontSize:"50px"}}>{watch}</h1>
      <button className='start' disabled={started} onClick={startWatch}>Start</button>
      <button className='stop'  onClick={stopWatch}>Stop</button>
      <button className='reset'  onClick={resetWatch}>Reset</button>
    </div>
  );
}

export default App;
