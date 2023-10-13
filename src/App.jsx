import './App.css';
import Lifestyle from './pages/Lifestyle';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/lifestyle' element={<Lifestyle/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>    
      </Routes>
    </Router>
    // <Lifestyle/>
  );
}

export default App;
