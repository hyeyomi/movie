import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState("");
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setDetail(json.data.movie);
            setLoading(false);
            console.log(detail);
            console.log(detail);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    

    return <div>
        {loading ? <h1 id="loading">Loading...</h1> : <div id="detail" style ={{
            backgroundImage : `url(${detail.background_image})`
        }}>
            <div id="container">
            <h2 id="title">{detail.title}</h2>
            <div id="description">
                <div id="mini1">
            <span>Release</span> &nbsp; <h4>{detail.year} </h4>  <br /> 
            <span> Genre</span>&nbsp;&nbsp;&nbsp;&nbsp;<h4>{detail.genres.map((genre)=> <span> {genre} | </span>)}</h4> <br /> 
            <span>Rating</span>&nbsp;&nbsp;&nbsp; <h4>{detail.rating} ⭐</h4>  <br /> 
            <span>Description</span> <h4><p id="detail_des">{detail.description_full}</p></h4>
            <span>Torrents</span> <br /> 
            <h4>{detail.torrents.map((t,index)=><a href={t.url}>| torrent{index+1} | &nbsp;&nbsp;</a>)}</h4> <br />
            <a href={detail.url} id="link">more detail</a>
            </div>
            <img src={detail.medium_cover_image} id="des_img"></img>
            </div>
            </div>
                        </div>}

    </div>
}

export default Detail;