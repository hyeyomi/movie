import{
  Link,
}from "react-router-dom";
import PropTypes from "prop-types";
function Movie({id,title,medium_cover_image,rating,summary,genres}){
    return  <div >
    <div id="des">
    <Link to={`/movie/${id}`}><img id="poster" src={medium_cover_image} alt={title}></img></Link>
    <h2>  <Link to={`/movie/${id}`}>{title}</Link> </h2>
    <h4>Genre</h4>
    <ul>
    {genres.map((g) => (<li key={g}>{g}</li>))}
    </ul>
    <h4>rating &nbsp;: ⭐{rating}</h4>
    <h4>Summary</h4>
    <p id="summary">{summary}</p>
    </div>
    </div>;
}
Movie.propTypes = {
  id : PropTypes.number.isRequired,
  medium_cover_image : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string.isRequired),
  rating : PropTypes.number.isRequired,
  summary : PropTypes.string.isRequired,
}
export default Movie;