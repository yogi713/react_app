import { useEffect, useState } from "react";
import "./App.css"
import searchIcon from "./search.svg"
import MoviesCard from "./MoviesCard";

const API_URL = 'https://www.omdbapi.com/?apikey=d7326d42';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [userSearch, setUserSearch] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("harry potter");
    }, [])

    return (
        <>
            <div className="app">
                <h1>MoviesHunt</h1>

                <div className="search">
                    <input placeholder="search" value={userSearch} onChange={(event) => setUserSearch(event.target.value)}></input>
                    <img src={searchIcon} alt="search" onClick={(event) => searchMovies(userSearch)} />
                </div>

                {
                    movies?.length > 0 ?
                    (
                    <div className="container">
                        {movies.map((movie) => (<MoviesCard movie={movie} />))}
                    </div>
                    ) :
                    (
                    <div className="empty">
                        <h2>No Movies Found..!</h2>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default App;



