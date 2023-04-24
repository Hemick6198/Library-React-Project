import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav'
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';


function App() {
  
  return (
      <div className="App">
        <Nav />
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        <Footer />
      </div>
  );
}

export default App;
