import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home.js';
import Footer from './components/footer/Footer.js';

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
