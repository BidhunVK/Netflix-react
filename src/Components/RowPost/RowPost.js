import React, { useEffect , useState } from 'react'
import './RowPost.css'
import axios from '../../axios';
import {imageUrl } from '../../constants/constant';
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(props.url).then((response) => {
            // console.log(response.data);
            setMovies(response.data.results)
        }).catch((err) => {
            // alert('network error')
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie) => 
                    <img className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
                
                    )
                }
               
                

            </div>
        </div>
    )
}

export default RowPost
