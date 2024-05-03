import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import { SidebarContextProvider } from './Context/SidebarContext'
import About from './Components/About/About';
import { useState } from 'react';

function App() {
  const[menuOpen,setMenuOpen]=useState(null);
  return (
    <SidebarContextProvider value={{menuOpen,setMenuOpen}}>
    <Router>
      <div className="h-screen w-screen App">
        <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
    </SidebarContextProvider>
  );
}

export default App;
