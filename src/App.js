import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home />} />
        <Route path='/menu' exact element={ <Menu />} />
        <Route path='/about' exact element={ <About />} />
        <Route path='/contact' exact element={ <Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
