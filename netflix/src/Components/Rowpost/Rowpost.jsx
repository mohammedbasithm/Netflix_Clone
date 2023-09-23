import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {API_KEY, imageUrl} from '../../Constants/Constans'


function Rowpost(props) {
  const[pop,setPop] = useState(false);
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1 
    }
  }
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length!==0){
        console.log(response.data.results[0])
        setUrlId(response.data.results[0])
        setPop(true);
      }else{
        toast.error("trailor not available")
      }
    })
  }
  const closeVideo=()=>{
    setPop(false)
}
  return (
    <div className='row'>
      <ToastContainer/>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
         
         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
        
      </div>
      { pop  && 
      <div className="video-popup">
        <button className="close-button" onClick={closeVideo}>X</button>
        <div className="video-content">
          <Youtube videoId={urlId.key} opts={opts}/>
          <h2 className='video-title'>{urlId.name}</h2>
        </div>
      </div>}
    </div>
  )
}

export default Rowpost
