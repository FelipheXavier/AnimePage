import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
export const AnimeInfo = () => {
  const API_URL = 'https://api.jikan.moe/v4/anime/'
  const { id } = useParams()
  const [anime,setAnime] = useState([])

  const fetchingData = async (id) =>{
    const res = await fetch(`${API_URL}${id}`)
    const data = await res.json()
    setAnime(data.data)
  }
  useEffect(()=>{
    fetchingData(id)
    
  })
  return (
    <div className='main'>
      <div className='infoContent'>
          <img src={anime?.images?.jpg?.large_image_url} alt={anime.title_english}/>
          <div className='infos'>
            <h3>{anime.title_english}</h3>
            <p>{anime?.synopsis}</p>
              <div className='infoscore'>
                <h2>Score: {anime?.score}<span><AiFillStar/></span></h2>
                <h2>Anime Release: {anime.year}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}


