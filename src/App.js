import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
function App() {
  return (
    <div class="h-screen overflow-y-scroll scrollbar-hide" className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
