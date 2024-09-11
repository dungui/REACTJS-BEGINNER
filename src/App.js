import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const styles={
    border: "6px solid black",
    width: "auto"
  }
  return (
    <BrowserRouter>
    <div className="App">
      <nav style={styles}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

     
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
