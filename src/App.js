import Movies from './components/Movies';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import { APIKEY } from './env'


import './App.scss';

function App() {
  const [searchField, setSearchField] = useState('');
  const [movies, setMovies] = useState([]);
  const URL = `https://www.omdbapi.com/?s=${searchField}&apikey=${APIKEY}`



function getMovies(){
  fetch(encodeURI(URL))
  .then(res => res.json())
  .then(movies => setMovies(movies.Search))
}

useEffect(getMovies, []);
useEffect(getMovies, [searchField]);

let timer;
function handleChange(e){
  clearTimeout(timer);
  setTimeout(() => {
    setSearchField(e.target.value);
  }, 1000)
  
}

  return (
    <div className="App">
      <Movies movies={movies}/>
      <input class="inp" type="text" onChange={handleChange}/>
    </div>
  );
  }



export default App;
