import './App.css';
import BootstrapNavbar from './BootstrapNavbar.js'
import PopCarousel from './PopCarousel.js'
import NewCarousel from './NewCarousel.js'
import NearCarousel from './NearCarousel.js'

function App() {
  return (
    <div className="App">
    <BootstrapNavbar />
    <div className="App-header"><br />
      <h1>Popular Restaurants</h1>{"\n"}
      <PopCarousel /><br />
      <h1>New Restaurants</h1>
      <NewCarousel /><br />
      <h1>Nearby Restaurants</h1>
      <NearCarousel />
      </div>
    </div>
  );
}

export default App;
