import './App.css';
import LandingPage from "./components/LandingPage"

const state = "Hello, World!"


function App() {
  return (
    <div className="App">
      <LandingPage data = {state}/>
    </div>
  );
}

export default App;
