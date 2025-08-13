import './App.css';
import SideBar from './components/SideBar/SideBar/SideBar';
import Home from './pages/Home/Home';

function App() {
  const title = "Welcome to RESBAC";
  const likes = 50;
  // macoconvert lahat into string...


  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>This is a simple React application.</p>
      </div>
    </div>
  );
}

export default App;