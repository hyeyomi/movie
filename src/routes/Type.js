import { useEffect , useState} from "react";
import{
    Link,
  }from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
function Type(){
    const {genre} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    console.log(genre);
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=rating`)).json();
            setMovie(json.data.movies);
            setLoading(false);
    }

    useEffect(()=>{
        getMovie();
    },[]);

    return <div>
       {loading? <h1 id="loading">Loading...</h1> : <div id="movie_list">
        <header id="type_header"><Link to="/"><span>Home</span></Link>
        <h3>{genre}</h3>
        </header>
       {movie.map((movie) => <div id="movie">
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
       </div>
        }
    </div>
}

export default Type;