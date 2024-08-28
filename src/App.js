import Apples from './components/Apples';
import Pears from './components/Pears';
import Bag from './components/Bag';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bag children={<Apples number="5" color="red" />}/>
      <Bag children={<Pears headmaster="Muhammad Ddungu"/>}/>
    </div>
  );
}

export default App;
