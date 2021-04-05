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


//main app 
const App = () => {
  //state constants, and their set functions for rooms and movies
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

  //use effect (same as ComponentDidMount), runs when component renders
  useEffect(() => {
    //calls the fetch rooms and changes state of roomData
    const getRooms = async() => {
      const roomsFromBackend = await fetchRooms()
      setRoomData(roomsFromBackend)
      console.log(roomData)
    }
    //calls the fetch movies and changes state of movieData
    const getMovies = async() => {
      const moviesFromBackend = await fetchMovies()
      setMovieData(moviesFromBackend)
      console.log(movieData)
    }
    
    //if movies has data in it, don't run the fetch again
    if (!movieData.length) {
      getMovies()
    }
    
    //get all the rooms from mongoDB
    getRooms()

  }, [])

  //Switch statement in return controlls what component renders
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
