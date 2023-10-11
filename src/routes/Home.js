import { useEffect, useState } from "react";
import{
  Link,
}from "react-router-dom";
import Movie from "../components/Movie";
function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () =>{ 
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    console.log(json);
    setLoading(false);
    };
  
    useEffect(()=>{
      getMovies();
    },[]);

    return <div>
      {loading ? <h1 id="loading">Loading...</h1> : <div id="movie_list">
        <header id="h1"> <span>Movie</span> 
        <nav>
          <ul id="menu">
            <Link to={`/page/Romance`}><li id="li"><span>Romance</span></li></Link>
            <Link to={`/page/Animation`}><li id="li"><span>Animation</span></li></Link>
            <Link to={`/page/Comedy`}><li id="li"><span>Comedy</span></li></Link>
            <Link to={`/page/Action`}><li id="li"><span>Action</span></li></Link>
            <Link to={`/page/Documentary`}><li id="li"><span>Documentary</span></li></Link>
          </ul>
        </nav>
        </header>
      {movies.map((movie) => <div id="movie">
        <Movie 
        key={movie.id}
        id={movie.id}
        medium_cover_image = {movie.medium_cover_image} 
        title = {movie.title} 
        genres = {movie.genres} 
        summary = {movie.summary} 
        rating = {movie.rating}
        /> </div>
      )}
      </div>}
  
    </div>;
}


  

export default Home;