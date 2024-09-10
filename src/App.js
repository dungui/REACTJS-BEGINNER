import FruitsCounter from './components/FruitsCounter';
import Fruits from './components/Fruits';
import './App.css';
import { useState } from "react";

function App() {
  const[fruits] = useState([
    {friutName: 'apple', id:1},
    {friutName: 'apple', id:2},
    {friutName: 'plum', id:3},
  ])
  return (
    <div className="App">
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
