import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NAVBAR from './Components/NAVBAR';

function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <h1>Archer Foundation</h1>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
