import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';
import NAVBAR from './Components/Navbar';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <h1>Archer Foundation</h1>
      <Home/>
      <ImageSlider/>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
