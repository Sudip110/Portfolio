import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
function App() {
  return (
    <Router>
      <div class="h-screen w-screen" className="App">
        <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
