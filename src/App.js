import './App.css';
import Hdr from './Header.js';
import Ftr from './Footer.js';
import Cad from './Principal.js';
function App() 
{
  return (
    <div className="App">
      <header>
        <Hdr />
      </header>
      <section className="Principal">
        <Cad />
      </section>
      <footer>
        <Ftr />
      </footer>
    </div>
  );
}

export default App;
