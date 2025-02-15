import { useState } from "react";
import "./App.css";
import WeatherData from "./assets/components/WeatherData";

function App() {
  const [counter, setCounter] = useState(0);
  const [searchQuery, setsearchQuery] = useState("Priyadarshini");

  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const Empty = () => {
    setsearchQuery(" ");
  };
  const handleChange = (Event) => {
    setsearchQuery(Event.target.value);

    console.log(searchQuery);
  };
  // console.log("rendering...");

  return (
    <>
      {/* <input 
       placeholder="search" 
       type='text' 
       value={searchQuery}
        style={{padding:"10px", minwidth: "300px", borderRadius: "10px"}}
        onChange={(Event) => handleChange(Event)}
        ></input>
       
      <button onClick={Empty}> clear search</button>
    
      <h1>hello vite: {counter}</h1>
      <button onClick={increaseCounter}>increase count</button> */}
      <WeatherData />
    </>
  );
}

export default App;
