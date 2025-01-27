import React from 'react';
import { useEffect } from 'react';
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?apikey=d67164fd"
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search["0"]);
    
  }
  useEffect(() => {
    searchMovies("Batman");
  }, [])

  return (
    <div className="app">
      <h1>Movie States</h1>

      <div className='search'>
        <input 
        placeholder='Search for a specific movie'
        value="Batman"
        onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}}/>
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>Name</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
