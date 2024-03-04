import React, { useEffect , useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../axios';
import {imageUrl , API_KEY } from '../../constants/constant';
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch((err) => {
            // alert('network error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
            else {
                console.log('Trailer not available');
            }
            
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie) => 
                    <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
                
                    )
                }
               
                

            </div>
           {urlId &&  <YouTube videoId={urlId.key} opts={opts}></YouTube>}
        </div>
    )
}

export default RowPost
