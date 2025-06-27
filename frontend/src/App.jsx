import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {

 
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
  

  
}

export default App;
