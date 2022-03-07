import {useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
 
const API_URL = 'http://www.omdbapi.com?apikey=25179af4';

const movie1 = {
    "Title": "Friends",
    "Year": "1994–2004",
    "imdbID": "tt0108778",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
}
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data.Search);
    }  

    useEffect(() => {
        searchMovies('Friends')
    },[])  // GIVES THE DATA WHENEVER THE PAGE IS LOADED

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder='Search for movies...'
                    value="Friends"
                    onChange={() => { }}
                    
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                    
                 />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster!='N/A'?movie1.Poster:'https://viaplaceholder.com/400'} alt={movie1.Title} />
                    </div>

                    <div>
                        <span>{movie1.Type }</span>
                        <h3>{movie1.Title }</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;