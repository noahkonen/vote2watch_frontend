import './App.css';
import LandingPage from "./components/LandingPage";
import Axios from "axios";
import React, { useState, useEffect } from 'react';


// TODO: Learn about state and setting state
//===============================================

const getAll = async () => {
  await Axios.get("http://localhost:3003/api/rooms/findAll")
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}



const App = () => {
  const [roomData, setRoomData] = useState(0)

  
  getAll()
  
  return (
    <div className="App">
      <LandingPage data = {roomData}/>
    </div>
  );
}

export default App;
