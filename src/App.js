import './App.css';
import LandingPage from "./components/LandingPage"

const state = "Spider Solitaire is gay"


function App() {
  return (
    <div className="App">
      <LandingPage data = {state}/>
    </div>
  );
}

export default App;
