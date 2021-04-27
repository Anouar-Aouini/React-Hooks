import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import {Data} from './Components/Data/Data';
import MovieList from "./Components/MovieList/MovieList"
import React,{useState} from 'react';

function App() {
  const [data,setData]=useState(Data)
  const [movieSearch,setMovieSearch]=useState("");
  const [movieSearchRating,setMovieSearchRating]=useState(0);
  const handleClick=(newMovie)=>{
    setData([...data,newMovie])
  }
  return (
    <div>
      <NavBar handleClick={handleClick} setMovieSearch={setMovieSearch} setMovieSearchRating={setMovieSearchRating}/>
      <MovieList Data={data} movieSearch={movieSearch} movieSearchRating={movieSearchRating}></MovieList>
      
    </div>
  );}
export default App;