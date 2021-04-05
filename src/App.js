import './App.css';
import Movies from "./components/Movies";
import LandingPage from "./components/LandingPage";
import HostGameRoom from "./components/HostGameRoom";
import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuestGameRoom from './components/GuestGameRoom';

// TODO: Learn about state and setting state
//===============================================



const App = () => {
  // const [showAddRoom, setShowAddRoom] = useState(false)
  const [roomData, setRoomData] = useState([])
  const [movieData, setMovieData] = useState([])

  //fetch all rooms
  const fetchRooms = async () => {
    const res = await Axios.get("http://localhost:3003/api/rooms/findAll")
    const data = await res.data
    return data
  }


  //fetch all movies
  const fetchMovies = async () => {
    const res = await Axios.get("http://localhost:3003/api/movies/findAll")
    const data = await res.data
    console.log(data)
    return data
  }

  useEffect(() => {
    const getRooms = async() => {
      const roomsFromBackend = await fetchRooms()
      setRoomData(roomsFromBackend)
      console.log(roomData)
    }

    const getMovies = async() => {
      const moviesFromBackend = await fetchMovies()
      setMovieData(moviesFromBackend)
      console.log(movieData)
    }
    
    if (!movieData.length) {
      getMovies()
    }
    
    getRooms()


    console.log('useEffect')
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path = '/' exact
        render = {() => <LandingPage roomData = {roomData} />}
      />
      <Route path = '/HostGameRoom'
      render = {() => <HostGameRoom roomData = {roomData} />}
      />
      <Route path = '/GuestGameRoom'
      render = {() => <GuestGameRoom roomData = {roomData} />}
      />
      </Switch>
    </div>
  );
}

export default App;
