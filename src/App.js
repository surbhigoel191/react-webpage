import './Style/App.css';
import BootstrapNavbar from './Elements/BootstrapNavbar.js'
import PopCarousel from './Elements/PopCarousel.js'
import NewCarousel from './Elements/NewCarousel.js'
import NearCarousel from './Elements/NearCarousel.js'

function App() {
  return (
    <div className="App">
    <BootstrapNavbar />
    <div className="App-header"><br />
      <h1>Popular Restaurants</h1>{"\n"}
      <PopCarousel /><br /><br /><br />
      <h1>New Restaurants</h1>
      <NewCarousel /><br /><br /><br />
      <h1>Nearby Restaurants</h1>
      <NearCarousel /><br />
      </div>
    </div>
  );
}

export default App;
