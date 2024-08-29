import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="second card's h2" h3="second card's h3"/>
      <Card h2="third card's h2" h3="third card's h3"/>
    </div>
  );
}

export default App;
