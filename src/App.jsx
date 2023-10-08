import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slider/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
