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
      <Home/>
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <h1 style={{fontFamily: "Times-New-Roman", fontSize: "4.5rem"}}>Archer Foundation</h1>
      <ImageSlider/>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
