import './App.css';
import background from "./assets/Background.png"
import Footer from './components/footer/Footer.js';

import Header from './components/header/Header';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <div className="bg">
          <Header/>
          <Home/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
